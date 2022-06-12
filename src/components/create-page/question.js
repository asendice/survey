import classes from "./question.module.css";

function Question(props) {
  const { title, type, number } = props.info;

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{number}.</h1>
        <h2>{title}</h2>
      </div>
      {type === "Single Textfield" && <input disabled/>}
      {type === "Comment Textfield" && <textarea disabled/>}
      {/* {type === "Single Textfield" && <input disabled/>}
      {type === "Single Textfield" && <input disabled/>} */}
    </div>
  );
}

export default Question;
