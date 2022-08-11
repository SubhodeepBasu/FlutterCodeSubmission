import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={classes.btn}>
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
