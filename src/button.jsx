import "./buttons.css";

export const Button = (props) => {
  const { className, text } = props;
  return <button className={className}>{text}</button>;
};
