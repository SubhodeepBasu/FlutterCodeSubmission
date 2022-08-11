import { tableHeaders } from "../../Helpers/HelperMethods";
import classes from "./Table.module.css";
import { tableActions } from "../../store/table_slice";
import { useDispatch } from "react-redux";

const Table = (props) => {
  const dispatch = useDispatch();

  const changeOrderHandler = (key) => {
    dispatch(tableActions.sortTable_Teams(key));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.key}>
                <div
                  className={classes.headerSelect}
                  onClick={changeOrderHandler.bind(this, header.key)}
                >
                  <h3>{header.value}</h3>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.teams.map((team) => (
            <tr key={team.id}>
              <td>{team.position}</td>
              <td>
                <div
                  className={classes.teamSelect}
                  onClick={props.teamClickHandler.bind(this, team.id)}
                >
                  <h4>{team.name}</h4>
                </div>
              </td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.goal}</td>
              <td>{team.difference}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
