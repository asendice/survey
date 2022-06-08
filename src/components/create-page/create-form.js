import classes from "./create-form.module.css";
import { useState } from "react";
import AddQuestion from "./add-question";

function CreateForm(){
  const [ name, setName ] = useState("Untitled Survey");
  const [ questions, setQuestions ] = useState([]);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create Survey</h1>
      <form className={classes.form}>
        <h1 className={classes.name}>{name}</h1>
        <AddQuestion />
      </form>
    </div>
  )
}

export default CreateForm;