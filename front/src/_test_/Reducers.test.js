import postsReducers from "../store/reducers/postsReducer";

describe("postsReducers", () => {
  let state;
  beforeEach(() => {
    state = {
      items: [],
      isFetching: false,
      error: null,
      userItems: [],
      numberOfElements: 0,
    };
  });

  it("reducer for FETCH_POSTS", () => {
    state = postsReducers(state, {
      type: "POST/FETCH_POSTS_REQUESTED",
    });
    expect(state).toEqual({
      items: [],
      isFetching: true,
      error: null,
      userItems: [],
      numberOfElements: 0,
    });
  });

  it("reducer for FETCH_POSTS_REJECTED", () => {
    state = postsReducers(state, {
      type: "POST/FETCH_POSTS_REJECTED",
      error: undefined,
    });
    expect(state).toEqual({
      items: [],
      isFetching: false,
      error: undefined,
      userItems: [],
      numberOfElements: 0,
    });
  });
});
