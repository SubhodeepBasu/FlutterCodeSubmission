import { createSlice } from "@reduxjs/toolkit";
import { getLeagueURLbyID } from "../Helpers/APIs";
import { getModifiedTeamData } from "../Helpers/HelperMethods";

const team_slice = createSlice({
  name: "team",
  initialState: {
    isLoading: false,
    error: null,
    squad: null,
    team_detail: null,
  },
  reducers: {
    updateIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateError(state, action) {
      state.error = action.payload;
    },
    updateSquad(state, actions) {
      state.squad = actions.payload;
    },
    updateTeamDetail(state, actions) {
      state.team_detail = actions.payload;
    },
  },
});

export const fetchTeamData = (teamID) => {
  return async (dispatch) => {
    const fetchTeam = async (teamID) => {
      const URL = getLeagueURLbyID(teamID);
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch team standings!!!");
      }
      const data = await response.json();
      const teamDetail = {
        name: data.data.name,
        logo: data.data.logo_path,
      };
      dispatch(team_slice.actions.updateTeamDetail(teamDetail));
      const team = getModifiedTeamData(data.data);
      dispatch(team_slice.actions.updateIsLoading(false));
      dispatch(team_slice.actions.updateSquad(team));
    };

    dispatch(team_slice.actions.updateIsLoading(true));
    dispatch(team_slice.actions.updateError(null));
    fetchTeam(teamID).catch((error) => {
      dispatch(team_slice.actions.updateError(error.message));
      dispatch(team_slice.actions.updateIsLoading(false));
    });
  };
};

export const tableActions = team_slice.actions;
export default team_slice;
