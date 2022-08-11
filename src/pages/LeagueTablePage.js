import { useParams } from "react-router-dom";
import LeagueTable from "../components/LeagueTable/LeagueTable";

const LeagueTablePage = () => {
  const { id } = useParams();
  return (
    <div>
      <LeagueTable competitionId={id} />
    </div>
  );
};

export default LeagueTablePage;
