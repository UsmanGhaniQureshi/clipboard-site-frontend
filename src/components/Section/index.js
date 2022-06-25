const Section = ({
  headingText,
  paragraphText,
  headingClasses,
  paragraphClasses,
}) => {
  return (
    <section>
      {headingText && (
        <h1 className={`text-slate-700 font-bold  ${headingClasses}`}>
          {headingText}
        </h1>
      )}
      <p className={`text-slate-400 ${paragraphClasses}`}>{paragraphText}</p>
    </section>
  );
};

export default Section;
