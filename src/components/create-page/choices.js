import classes from "./choices.module.css";
import { BsCircle, BsSquare } from "react-icons/bs";
import { useState } from "react";

function Choices(props) {
  const [numberOfChoices, setNumberOfChoices] = useState([1, 2]);
  const { type, choices, setChoices } = props;

  function updateChoices(e) {
    const { name, value } = e.target;
    setChoices({
      ...choices,
      [name]: value,
    });
  }

  return (
    <div>
      {numberOfChoices.map((x, index) => (
        <div key={index}>
          {type === "Multiple Choice" && <BsCircle />}
          {type === "Checkbox" && <BsSquare />}
          <input name={index} type="text" onChange={(e) => updateChoices(e)} />
        </div>
      ))}
    </div>
  );
}

export default Choices;
