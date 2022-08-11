const token = "JILCWmxm04aZKYJdN9PirNGl4LPcQOEm35enVURc2z27VTnraU0nDTlbC9Qr";
export const leaguesURL = `https://soccer.sportmonks.com/api/v2.0/leagues?api_token=${token}`;

export const leagueURLById = (id) => {
  const URL = `https://soccer.sportmonks.com/api/v2.0/leagues/${id}?api_token=${token}`;
  return URL;
};

export const seasonsURL = `https://soccer.sportmonks.com/api/v2.0/seasons?api_token=${token}`;

export const leagueURLbySeasonID = (id) => {
  const URL = `https://soccer.sportmonks.com/api/v2.0/standings/season/${id}?api_token=${token}`;
  return URL;
};

export const getLeagueURLbyID = (id) => {
  const URL = `https://soccer.sportmonks.com/api/v2.0/teams/${id}?api_token=${token}&include=squad`;
  return URL;
};

export const playerURLbyID = (id) => {
  const URL = `https://soccer.sportmonks.com/api/v2.0/players/${id}?api_token=${token}`;
  return URL;
};
