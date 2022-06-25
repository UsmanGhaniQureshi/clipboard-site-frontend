const Button = ({ btnText, btnClasses }) => {
  return <button className={`${btnClasses} rounded-full`}>{btnText}</button>;
};

export default Button;
