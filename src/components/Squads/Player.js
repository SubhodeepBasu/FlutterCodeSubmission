import { useEffect, useState } from "react";
import { playerURLbyID } from "../../Helpers/APIs";
import Card from "../../UI/Card";

const Player = (props) => {
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlayerFromId = async (id) => {
    setIsLoading(true);
    setError(null);
    const URL = playerURLbyID(id);
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch player");
    }
    const data = await response.json();
    setIsLoading(false);
    setPlayer({
      name: data.data.display_name,
      img: data.data.image_path,
      id: data.data.player_id,
    });
  };

  useEffect(() => {
    fetchPlayerFromId(props.id).catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
  }, [props.id]);

  return (
    <div key={props.id}>
      {isLoading && <h3>loading info data...</h3>}
      {!isLoading && player && (
        <Card
          imagePath={player.img}
          alt={"Image not found"}
          text={player.name}
        />
      )}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default Player;
