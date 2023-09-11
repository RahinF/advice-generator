import Image from 'next/image';

interface Props {}

const Button = ({}: Props) => {
  return (
    <button className="bg-primary-neon-green p-5 rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 hover:shadow-primary-neon-green hover:shadow-round transition duration-500">
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
