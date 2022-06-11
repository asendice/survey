import { Link } from "react-router-dom";
import classes from "./button.module.css";

function Button(props) {
  const { link, cancel, action } = props;
  if (link) {
    return (
      <Link to={link} className={classes.container}>
        {props.children}
      </Link>
    );
  }

  if (cancel){
    return (
      <div onClick={() => action(false)} className={classes.cancel}>{props.children}</div>
    )
  }

  return <div onClick={(e) => action(e)} className={classes.container}>{props.children}</div>;
}

export default Button;
