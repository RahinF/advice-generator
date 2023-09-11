import { Circles } from 'react-loader-spinner';

const Spinner = () => {
  return (
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
  );
};

export default Spinner;
