import leagues_slice from "../store/leagues_slice";

describe("Leagues Reducer", () => {
  it("should return the initial state when empty action is passed", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = leagues_slice.reducer(initialState, action);
    expect(result).toEqual({
      isLoading: false,
      error: null,
      all_leagues: null,
    });
  });
  it("should replace previous leagues", () => {
    const initialState = {
      isLoading: false,
      error: null,
      all_leagues: "dummy leagues",
    };
    const action = leagues_slice.actions.updateAll_leagues("hello");
    const result = leagues_slice.reducer(initialState, action);
    expect(result.all_leagues).toEqual("hello");
  });
  it("should replace previous isLoading", () => {
    const initialState = { isLoading: false, error: null, all_leagues: null };
    const action = leagues_slice.actions.updateIsLoading(true);
    const result = leagues_slice.reducer(initialState, action);
    expect(result.isLoading).toEqual(true);
  });
  it("should replace previous error", () => {
    const initialState = { info: null, isLoading: false, error: "404 error" };
    const action = leagues_slice.actions.updateError("403 error");
    const result = leagues_slice.reducer(initialState, action);
    expect(result.error).toEqual("403 error");
  });
});
