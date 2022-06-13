import classes from "./question.module.css";
import { BsSquare, BsCircle } from "react-icons/bs";

function Question(props) {
  const { title, type, number, choices } = props.info;

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{number}.</h1>
        <h2>{title}</h2>
      </div>
      {type === "Single Textfield" && <input disabled />}
      {type === "Comment Textfield" && <textarea disabled />}
      {type === "Multiple Choice" &&
        Object.values(choices).map((choice, index) => (
          <div key={choice} className={classes.choices}>
            <BsCircle />
            {choice}
          </div>
        ))}
      {type === "Checkbox" &&
        Object.values(choices).map((choice, index) => (
          <div key={choice} className={classes.choices}>
            <BsSquare />
            {choice}
          </div>
        ))}
    </div>
  );
}

export default Question;
