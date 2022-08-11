import classes from "./LeagueTable.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTableData } from "../../store/table_slice";
import Table from "../Table/Table";
import TeamDetails from "../TeamDetails/TeamDetails";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button";

const LeagueTable = (props) => {
  const isLoading = useSelector((state) => state.table.isLoading);
  const error = useSelector((state) => state.table.error);
  const teams = useSelector((state) => state.table.table_teams);
  const [tableView, setTableView] = useState(true);
  const [teamID, setTeamID] = useState();

  const dispatch = useDispatch();
  const teamClickHandler = (teamID) => {
    setTeamID(teamID);
    setTableView(false);
  };

  const detailsClickHandler = () => {
    setTableView(true);
  };

  useEffect(() => {
    dispatch(fetchTableData(props.competitionId));
  }, [dispatch, props.competitionId]);

  return (
    <div>
      {isLoading && <h3>loading info data...</h3>}
      {!isLoading && teams && (
        <div>
          {tableView && (
            <div className={classes.leagueTable}>
              <Table teams={teams} teamClickHandler={teamClickHandler} />
            </div>
          )}
          {!tableView && (
            <TeamDetails
              detailsClickHandler={detailsClickHandler}
              teamID={teamID}
            />
          )}
          {tableView && (
            <NavLink to="/home">
              <Button text={"back to leagues"} />
            </NavLink>
          )}
        </div>
      )}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default LeagueTable;
