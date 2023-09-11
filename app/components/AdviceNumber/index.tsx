interface Props {
  slipId: number;
}

const AdviceNumber = ({ slipId }: Props) => {
  return (
    <span className="text-primary-neon-green uppercase tracking-[0.3em] text-sm">
      advice #{slipId}
    </span>
  );
};

export default AdviceNumber;
