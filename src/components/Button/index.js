const Button = ({ btnText, btnClasses }) => {
  return <button className={`${btnClasses} rounded-full text-xs font-bold md:text-sm `}>{btnText}</button>;
};

export default Button;
