import classes from "./create-form.module.css";
import { useState } from "react";
import AddQuestion from "./add-question";
import NameModal from "./name-modal";

function CreateForm() {
  const [name, setName] = useState("Untitled Survey");
  const [questions, setQuestions] = useState([]);
  const [modalNameOpen, setNameModalOpen] = useState(false);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create Survey</h1>
      <h1
        className={classes.name}
        onClick={() => setNameModalOpen(!modalNameOpen)}
      >
        {name}
      </h1>
      {modalNameOpen && <NameModal setName={setName} setOpen={setNameModalOpen} />}
      {/* <AddQuestion /> */}
    </div>
  );
}

export default CreateForm;
