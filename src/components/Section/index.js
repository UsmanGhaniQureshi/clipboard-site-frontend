const Section = ({
  headingText,
  paragraphText,
  headingClasses,
  paragraphClasses,
}) => {
  return (
    <section>
      {headingText && (
        <h1
          className={`text-slate-700 text-sm md:text-2xl font-bold  ${headingClasses}`}
        >
          {headingText}
        </h1>
      )}
      <p
        className={` text-sm  md:text-base text-slate-400 ${paragraphClasses}`}
      >
        {paragraphText}
      </p>
    </section>
  );
};

export default Section;
