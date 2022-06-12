import classes from "./create-form.module.css";
import { useState } from "react";
import AddQuestion from "./add-question";
import NameModal from "./name-modal";
import Button from "../utils/button";
import Question from "./question";

function CreateForm() {
  const [name, setName] = useState("Untitled Survey");
  const [questions, setQuestions] = useState([]);
  const [modalNameOpen, setNameModalOpen] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(true);

  function updateQuestions(obj) {
    setQuestions(() => [...questions, obj]);
    setShowAddQuestion(false);
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create Survey</h1>
      <h1
        className={classes.name}
        onClick={() => setNameModalOpen(!modalNameOpen)}
      >
        {name}
      </h1>
      {questions.map((question) => (
        <Question info={question}/>
      ))}
      {modalNameOpen && (
        <NameModal setName={setName} setOpen={setNameModalOpen} />
      )}
      {showAddQuestion && <AddQuestion update={updateQuestions} questionNumber={questions.length + 1} />}
      {!showAddQuestion && <button onClick={() => setShowAddQuestion(true)}>Add Question</button>}
    </div>
  );
}

export default CreateForm;
