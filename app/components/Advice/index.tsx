import AdviceNumber from '@components/AdviceNumber';
import AdviceText from '@components/AdviceText';
import Button from '@components/Button';
import PatternDivider from '@components/PatternDivider';
import Spinner from '@components/Spinner';
import useAdviceHook from '@hooks/useAdviceHook';

const Advice = () => {
  const { data, isFetching, refetch } = useAdviceHook();

  return (
    <main>
      <div className="bg-neutral-dark-blue h-screen grid place-items-center px-4">
        <div className="bg-neutral-dark-grayish-blue max-w-lg rounded-2xl w-full relative grid items-center h-72">
          {isFetching ? (
            <Spinner />
          ) : (
            <div className="text-center flex flex-col gap-8 p-10 pb-16">
              <AdviceNumber slipId={data.slip.id} />

              <AdviceText>{data.slip.advice}</AdviceText>

              <PatternDivider />
            </div>
          )}
          <Button
            refetch={refetch}
            isFetching={isFetching}
          />
        </div>
      </div>
    </main>
  );
};

export default Advice;
