import classes from "./hero.module.css";
import Button from "../utils/button";

function Hero() {
  return (
    <div className={classes.container}>
      <Button link="/create">Get Started</Button>
    </div>
  );
}

export default Hero;
