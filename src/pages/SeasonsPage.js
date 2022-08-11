import { useParams } from "react-router-dom";
import Seasons from "../components/Seasons/Seasons";

const SeasonsPage = () => {
  const { id: leagueID } = useParams();
  return <Seasons leagueID={leagueID} />;
};

export default SeasonsPage;
