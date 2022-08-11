import { createSlice } from "@reduxjs/toolkit";
import { leaguesURL } from "../Helpers/APIs";

const leagues_slice = createSlice({
  name: "leagues",
  initialState: { isLoading: false, error: null, all_leagues: null },
  reducers: {
    updateIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateError(state, action) {
      state.error = action.payload;
    },
    updateAll_leagues(state, actions) {
      state.all_leagues = actions.payload;
    },
  },
});

export const fetchLeaguesData = () => {
  return async (dispatch) => {
    const fetchLeagues = async () => {
      const response = await fetch(leaguesURL);
      if (!response.ok) {
        throw new Error("Failed to fetch leagues!!!");
      }
      const data = await response.json();
      dispatch(leagues_slice.actions.updateIsLoading(false));
      dispatch(
        leagues_slice.actions.updateAll_leagues(Object.entries(data.data))
      );
    };

    dispatch(leagues_slice.actions.updateIsLoading(true));
    dispatch(leagues_slice.actions.updateError(null));
    fetchLeagues().catch((error) => {
      dispatch(leagues_slice.actions.updateError(error.message));
      dispatch(leagues_slice.actions.updateIsLoading(false));
    });
  };
};

export const leaguesActions = leagues_slice.actions;
export default leagues_slice;
