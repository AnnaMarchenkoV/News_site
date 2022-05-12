import {
  userLogin,
  userRegistrationRequest,
  userAuthenticate,
} from "../store/actions/userActions";

describe("ActionsCreator", () => {
  it("actionCreator userLogin", () => {
    const login = userLogin("data");
    expect(login).toEqual({ type: "USER/REQUESTED", payload: "data" });
  });

  it("actionCreator userRegistrationRequest", () => {
    const registration = userRegistrationRequest("data");
    expect(registration).toEqual({
      type: "USER/REGISTRATION",
      payload: "data",
    });
  });

  it("actionCreator userAuthenticate", () => {
    const authenticate = userAuthenticate("data");
    expect(authenticate).toEqual({
      type: "USER/AUTHENTICATE_REQUESTED",
      payload: "data",
    });
  });
});
