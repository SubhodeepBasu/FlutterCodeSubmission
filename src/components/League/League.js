import { useCallback, useEffect, useState } from "react";
import { leagueURLById } from "../../Helpers/APIs";
import Card from "../../UI/Card";

const League = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [league, setLeague] = useState(null);

  const fetchLeague = useCallback(async () => {
    const url = leagueURLById(props.id);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Couldn't fetch league!!!");
      }
      const data = await response.json();
      setIsLoading(false);
      const leagueData = data.data;
      setLeague(leagueData);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, [props]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchLeague();
  }, [fetchLeague]);

  return (
    <div>
      {isLoading && <h3>loading info data...</h3>}
      {!isLoading && league && (
        <div>
          <Card text={league.name} imagePath={league.logo_path} alt={""} />
        </div>
      )}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default League;
