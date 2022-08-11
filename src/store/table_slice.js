import { createSlice } from "@reduxjs/toolkit";
import { leagueURLbySeasonID } from "../Helpers/APIs";
import { getTeamStandingData } from "../Helpers/HelperMethods";

const table_Slice = createSlice({
  name: "table",
  initialState: { isLoading: false, error: null, table_teams: null },
  reducers: {
    updateIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateError(state, action) {
      state.error = action.payload;
    },
    updateTable_teams(state, actions) {
      state.table_teams = actions.payload;
    },
    sortTable_Teams(state, action) {
      let isASC = false;
      let key = action.payload;
      if (
        state.table_teams[0][key] <
        state.table_teams[state.table_teams.length - 1][key]
      ) {
        isASC = true;
      }
      if (!isASC) {
        state.table_teams.sort((a, b) => {
          const first = a[key];
          const second = b[key];
          if (first < second) {
            return -1;
          }
          if (first > second) {
            return 1;
          }
          return 0;
        });
      } else {
        state.table_teams.sort((a, b) => {
          const first = a[key];
          const second = b[key];
          if (first < second) {
            return 1;
          }
          if (first > second) {
            return -1;
          }
          return 0;
        });
      }
    },
  },
});

export const fetchTableData = (competetionID) => {
  return async (dispatch) => {
    const fetchTableTeams = async (competetionID) => {
      const URL = leagueURLbySeasonID(competetionID);
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch team standings!!!");
      }
      const data = await response.json();
      const teams = getTeamStandingData(data.data[0].standings.data);
      dispatch(table_Slice.actions.updateIsLoading(false));
      dispatch(table_Slice.actions.updateTable_teams(teams));
    };

    dispatch(table_Slice.actions.updateIsLoading(true));
    dispatch(table_Slice.actions.updateError(null));
    fetchTableTeams(competetionID).catch((error) => {
      dispatch(table_Slice.actions.updateError(error.message));
      dispatch(table_Slice.actions.updateIsLoading(false));
    });
  };
};

export const tableActions = table_Slice.actions;
export default table_Slice;
