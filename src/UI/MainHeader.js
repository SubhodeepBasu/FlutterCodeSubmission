import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <div className={classes.header}>
      <NavLink to="/home">
        <section>
          <h1>Flutter Leagues</h1>
        </section>
      </NavLink>
    </div>
  );
};

export default MainHeader;
