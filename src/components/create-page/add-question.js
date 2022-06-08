import classes from "./add-question.module.css";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function AddQuestion() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  return (
    <div className={classes.container} onClick={() => setOpen(!open)}>
      <div className={classes.title}>
        <h2>Add Survey Question</h2>
        <BsThreeDotsVertical className={classes.icon} />
      </div>

      {open && (
        <div className={classes.openContainer}>
          <div className={classes.options}>
            <label>Tile of Question:</label>
            <input onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddQuestion;
