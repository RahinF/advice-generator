import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  refetch: () => void;
  isFetching: boolean;
}

const Button = ({ refetch, isFetching }: Props) => {
  return (
    <button
      onClick={refetch}
      disabled={isFetching}
      className={clsx(
        [
          'absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2',
          'transition duration-500',
          ' p-5 rounded-full',
        ],
        {
          'bg-primary-neon-green': !isFetching,
          'bg-neutral-grayish-blue': isFetching,
          'hover:shadow-primary-neon-green hover:shadow-round': !isFetching,
        },
      )}
    >
      <Image
        src="/icon-dice.svg"
        alt="dice icon"
        width={24}
        height={24}
        className="pointer-events-none"
      />
    </button>
  );
};

export default Button;
