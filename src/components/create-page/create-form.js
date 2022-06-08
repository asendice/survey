import classes from "./create-form.module.css";
import { useState } from "react";
import AddQuestion from "./add-question";

function CreateForm(){
  const [ name, setName ] = useState("");
  const [ questions, setQuestions ] = useState([]);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create Survey</h1>
      <form className={classes.form}>
        <label>Suvey Name:</label>
        <input type="text" placeholder="enter name of survey" />
        <AddQuestion />
      </form>
    </div>
  )
}

export default CreateForm;