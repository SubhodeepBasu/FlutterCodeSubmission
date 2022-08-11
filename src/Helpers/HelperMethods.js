export const getSeasonsByLeagueID = (seasonsArray, id) => {
  const filteredSeasons = [];
  seasonsArray.forEach((season) => {
    if (season.league_id.toString() === id) {
      filteredSeasons.push(season);
    }
  });
  return filteredSeasons;
};

export const getLeagueFromAllLeagues = (leagues, id) => {
  let name = null;
  let logo_path = null;
  leagues.forEach((league) => {
    if (league[1].id.toString() === id) {
      name = league[1].name;
      logo_path = league[1].logo_path;
    }
  });
  return { name, logo_path };
};

export const getTeamStandingData = (tableData) => {
  const teams = [];
  tableData.forEach((data) => {
    const team = {
      position: data.position,
      id: data.team_id,
      name: data.team_name,
      played: data.overall.games_played,
      won: data.overall.won,
      drawn: data.overall.draw,
      lost: data.overall.lost,
      goal: data.overall.goals_scored,
      difference: data.total.goal_difference,
      points: data.total.points,
    };
    teams.push(team);
  });
  return teams;
};

export const tableHeaders = [
  { key: "position", value: "POSITION" },
  { key: "name", value: "TEAM NAME" },
  { key: "played", value: "PLAYED" },
  { key: "won", value: "WON" },
  { key: "drawn", value: "DRAWN" },
  { key: "lost", value: "LOST" },
  { key: "goal", value: "GOAL" },
  { key: "difference", value: "DIFFERENCE" },
  { key: "points", value: "POINTS" },
];

export const getModifiedTeamData = (teamData) => {
  const team = [];
  const players = teamData.squad.data;
  players.forEach((player) => {
    team.push(player.player_id);
  });

  return team;
};
