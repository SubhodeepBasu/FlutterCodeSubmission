import Player from "./Player";
import { Fragment } from "react";

const Squads = (props) => {
  const squad = props.squad;

  return (
    <Fragment>
      {squad &&
        squad.map((player) => (
          <div key={player}>
            <Player id={player} />
          </div>
        ))}
    </Fragment>
  );
};

export default Squads;
