import classes from "./Leagues.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaguesData } from "../../store/leagues_slice";
import League from "../League/League";
import { NavLink } from "react-router-dom";

const Leagues = () => {
  const isLoading = useSelector((state) => state.leagues.isLoading);
  const error = useSelector((state) => state.leagues.error);
  const leagues = useSelector((state) => state.leagues.all_leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeaguesData());
  }, [dispatch]);

  return (
    <div className={classes.leagues}>
      {isLoading && <h3>loading info data...</h3>}
      {!isLoading && leagues && (
        <ul>
          {leagues.map((league) => (
            <li key={league[1].id}>
              <NavLink to={`/seasons/${league[1].id}`}>
                <League id={league[1].id} />
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {error && <h3>{error}</h3>}
    </div>
  );
};
export default Leagues;
