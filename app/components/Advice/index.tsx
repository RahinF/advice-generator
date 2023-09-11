import AdviceNumber from '@components/AdviceNumber';
import AdviceText from '@components/AdviceText';
import Button from '@components/Button';
import PatternDivider from '@components/PatternDivider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

const getAdvice = async () =>
  await axios
    .get('https://api.adviceslip.com/advice')
    .then((result) => result.data);

const Advice = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['advice'],
    queryFn: getAdvice,
    enabled: true,
  });

  const getAdviceOnClick = () => {
    refetch();
  };

  return (
    <main>
      <div className="bg-neutral-dark-blue h-screen grid place-items-center px-4">
        <div className="bg-neutral-dark-grayish-blue max-w-lg rounded-2xl w-full relative grid items-center h-72">
          {isFetching ? (
            <div className="flex flex-col items-center gap-6">
              <Circles
                height="80"
                width="80"
                color="hsl(150, 100%, 66%)"
                ariaLabel="rings-loading"
              />
              <span className="text-primary-neon-green uppercase tracking-widest text-sm">
                loading...
              </span>
            </div>
          ) : (
            <div className="text-center flex flex-col gap-8 p-10 pb-16">
              <AdviceNumber slipId={data.slip.id} />

              <AdviceText>{data.slip.advice}</AdviceText>

              <PatternDivider />
            </div>
          )}
          <Button
            onClick={getAdviceOnClick}
            isFetching={isFetching}
          />
        </div>
      </div>
    </main>
  );
};

export default Advice;
