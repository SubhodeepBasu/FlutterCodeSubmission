import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.imagePath} alt={props.alt} />
      <div className={classes.container}>
        <h3>
          <b>{props.text}</b>
        </h3>
      </div>
    </div>
  );
};

export default Card;
