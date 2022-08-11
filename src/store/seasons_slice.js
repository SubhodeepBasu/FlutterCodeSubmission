import { createSlice } from "@reduxjs/toolkit";
import { seasonsURL } from "../Helpers/APIs";
import { getSeasonsByLeagueID } from "../Helpers/HelperMethods";

const seasons_Slice = createSlice({
  name: "seasons",
  initialState: { isLoading: false, error: null, all_seasons: null },
  reducers: {
    updateIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateError(state, action) {
      state.error = action.payload;
    },
    updateAll_seasons(state, actions) {
      state.all_seasons = actions.payload;
    },
  },
});

export const fetchSeasonsData = (leagueID) => {
  return async (dispatch) => {
    const fetchSeasons = async (leagueID) => {
      const response = await fetch(seasonsURL);
      if (!response.ok) {
        throw new Error("Failed to fetch leagues!!!");
      }
      const data = await response.json();
      const seasonsByLeague = getSeasonsByLeagueID(data.data, leagueID);
      dispatch(seasons_Slice.actions.updateIsLoading(false));
      dispatch(seasons_Slice.actions.updateAll_seasons(seasonsByLeague));
    };

    dispatch(seasons_Slice.actions.updateIsLoading(true));
    dispatch(seasons_Slice.actions.updateError(null));
    fetchSeasons(leagueID).catch((error) => {
      dispatch(seasons_Slice.actions.updateError(error.message));
      dispatch(seasons_Slice.actions.updateIsLoading(false));
    });
  };
};

export const seasonsActions = seasons_Slice.actions;
export default seasons_Slice;
