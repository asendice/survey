import classes from "./name-modal.module.css";
import Button from "../utils/button";
import { useState } from "react";

function NameModal(props) {
  const [input, setInput] = useState("");
  const { setName, setOpen } = props;

  function onSavePress(e) {
    e.preventDefault();
    setName(input);
    setOpen(false);
  }

  return (
    <div className={classes.container}>
      <form className={classes.nameForm}>
        <label className={classes.nameLabel}>Survey Title</label>
        <input className={classes.nameInput} type="text" onChange={(e) => setInput(e.target.value)} />
        <div className={classes.actionBtns}>
          <Button action={setOpen} cancel={true}>CANCEL</Button>
          <Button action={onSavePress}>SAVE</Button>
        </div>
      </form>
    </div>
  );
}

export default NameModal;
