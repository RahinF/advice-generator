import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  onClick: () => void;
  isFetching: boolean;
}

const Button = ({ onClick, isFetching }: Props) => {
  const fetchOnClick = () => {
    !isFetching && onClick();
  };
  return (
    <button
      onClick={fetchOnClick}
      className={clsx(
        [
          'absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2',
          'transition duration-500',
          'bg-primary-neon-green p-5 rounded-full',
        ],
        {
          'hover:shadow-primary-neon-green hover:shadow-round': !isFetching,
        },
      )}
    >
      <Image
        src="/icon-dice.svg"
        alt="dice icon"
        width={24}
        height={24}
      />
    </button>
  );
};

export default Button;
