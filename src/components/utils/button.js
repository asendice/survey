import { Link } from "react-router-dom";
import classes from "./button.module.css";

function Button(props) {
  const { link } = props;
  if (link) {
    return (
      <Link to={link} className={classes.container}>
        {props.children}
      </Link>
    );
  }
  return <a></a>;
}

export default Button;
