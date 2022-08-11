import { configureStore } from "@reduxjs/toolkit";
import leagues_slice from "./leagues_slice";
import seasons_Slice from "./seasons_slice";
import table_Slice from "./table_slice";
import team_slice from "./team_slice";

const store = configureStore({
  reducer: {
    leagues: leagues_slice.reducer,
    seasons: seasons_Slice.reducer,
    table: table_Slice.reducer,
    team: team_slice.reducer,
  },
});

export default store;
