import AdviceNumber from './components/AdviceNumber';
import AdviceText from './components/AdviceText';
import Button from './components/Button';
import PatternDivider from './components/PatternDivider';

export default function Home() {
  return (
    <main>
      <div className="bg-neutral-dark-blue h-screen grid place-items-center px-4">
        <div className="bg-neutral-dark-grayish-blue max-w-lg rounded-2xl w-full relative">
          <div className="text-center flex flex-col gap-8 p-10 pb-16">
            <AdviceNumber slipId={117} />

            <AdviceText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              perferendis earum vitae quasi minima ab veritatis qui voluptatem
              necessitatibus debitis!
            </AdviceText>

            <PatternDivider />
          </div>
          <Button />
        </div>
      </div>
    </main>
  );
}
