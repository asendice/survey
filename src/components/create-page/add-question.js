import classes from "./add-question.module.css";
import { useState } from "react";
import {
  BsFillCaretDownFill,
  BsListUl,
  BsCheck2Square,
  BsTextareaResize,
  BsInputCursorText,
  BsPlusCircle,
} from "react-icons/bs";
import Button from "../utils/button";

function AddQuestion(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Single Textfield");

  const { update, questionNumber } = props;

  function updateType(type) {
    setOpen(false);
    setType(type);
  }

  function onSavePress() {
    const question = { title: title, type: type };
    update(question)
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>Q{questionNumber}</h2>
        <div className={classes.inputs}>
          <input
            type="text"
            placeholder="Enter your question"
            className={classes.questionInput}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={classes.dropdown} onClick={() => setOpen(!open)}>
            <p>{type}</p> <BsFillCaretDownFill />
          </div>
          {open && (
            <div className={classes.dropdownContent}>
              <ul>
                <li onClick={() => updateType("Single Textfield")}>
                  <BsInputCursorText />
                  <p>Single Textfield</p>
                </li>
                <li onClick={() => updateType("Comment Textfield")}>
                  <BsTextareaResize />
                  <p>Comment Textfield</p>
                </li>
                <li onClick={() => updateType("Multiple Choice")}>
                  <BsListUl />
                  <p>Multiple Choice</p>
                </li>
                <li onClick={() => updateType("Checkbox")}>
                  <BsCheck2Square />
                  <p>Checkbox</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={classes.actionBtns}>
        <div className={classes.nextquestion}>
          <p>NEXT QUESTION</p>
          <BsPlusCircle />
        </div>
        <div className={classes.savencancel}>
          {/* <Button cancel={true}>CANCEL</Button>
          <Button>SAVE</Button> */}
          <button>cancel</button>
          <button onClick={onSavePress}>save</button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
