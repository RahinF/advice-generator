const PatternDivider = () => {
  return (
    <picture>
      <source
        srcSet={`pattern-divider-desktop.svg`}
        media="(min-width: 375px)"
        width={448}
        height={16}
      />
      <img
        src={`pattern-divider-mobile.svg`}
        alt="pattern"
        width={448}
        height={16}
      />
    </picture>
  );
};

export default PatternDivider;
