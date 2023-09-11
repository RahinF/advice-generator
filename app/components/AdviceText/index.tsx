import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AdviceText = ({ children }: Props) => {
  return (
    <p className="text-primary-light-cyan text-xl max-w-prose font-extrabold">
      &quot;{children}&quot;
    </p>
  );
};

export default AdviceText;
