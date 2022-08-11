import { NavLink } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./Seasons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeasonsData } from "../../store/seasons_slice";
import { useEffect } from "react";
import { getLeagueFromAllLeagues } from "../../Helpers/HelperMethods";
import Card from "../../UI/Card";

const Seasons = (props) => {
  const isLoading = useSelector((state) => state.seasons.isLoading);
  const error = useSelector((state) => state.seasons.error);
  const seasons = useSelector((state) => state.seasons.all_seasons);
  const dispatch = useDispatch();
  const leagues = useSelector((state) => state.leagues.all_leagues);
  let seasonElement,
    leagueCard = <div></div>;

  useEffect(() => {
    dispatch(fetchSeasonsData(props.leagueID));
  }, [dispatch, props.leagueID]);

  if (isLoading) {
    seasonElement = <h3>loading info data...</h3>;
  }
  if (!isLoading && seasons) {
    if (seasons.length === 0) {
      seasonElement = <h2>No seasons found!!!</h2>;
    } else {
      seasonElement = (
        <ul>
          {seasons.map((season) => (
            <li key={season.id}>
              <NavLink to={`/leaguetable/${season.id}`}>
                <Button text={season.name} />
              </NavLink>
            </li>
          ))}
        </ul>
      );
    }
  }
  if (error) {
    seasonElement = <h3>{error}</h3>;
  }

  if (leagues) {
    const league = getLeagueFromAllLeagues(leagues, props.leagueID);
    if (league) {
      leagueCard = (
        <div className={classes.leagueLogo}>
          <Card text={""} imagePath={league.logo_path} alt={""} />
        </div>
      );
    }
  }

  return (
    <div className={classes.seasons}>
      {leagueCard}
      {seasonElement}
      <div className={classes.seasonButton}>
        <NavLink to="/home">
          <Button text={"back to leagues"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Seasons;
