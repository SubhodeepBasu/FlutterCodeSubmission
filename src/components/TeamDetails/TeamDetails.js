import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../../store/team_slice";
import Card from "../../UI/Card";
import Squads from "../Squads/Squads";
import Button from "../../UI/Button";
import classes from "./TeamDetails.module.css";

const TeamDetails = (props) => {
  const isLoading = useSelector((state) => state.team.isLoading);
  const error = useSelector((state) => state.team.error);
  const squad = useSelector((state) => state.team.squad);
  const team_detail = useSelector((state) => state.team.team_detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamData(props.teamID));
  }, [dispatch, props.teamID]);

  return (
    <div>
      {isLoading && <h3>loading info data...</h3>}
      {!isLoading && team_detail && (
        <div>
          <Card imagePath={team_detail.logo} alt={"Team Logo"} text={""} />
          <div className={classes.teamDetails}>
            <Squads squad={squad} />
          </div>
        </div>
      )}
      {error && <h3>{error}</h3>}
      <div onClick={props.detailsClickHandler}>
        <Button text="back to table" />
      </div>
    </div>
  );
};

export default TeamDetails;
