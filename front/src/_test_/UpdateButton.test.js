import React from "react";
import { MemoryRouter } from "react-router";
const { useSelector } = require("react-redux");
const {
  render,
  fireEvent,
} = require("@testing-library/react");
import UpdateProfile from "../components/Profile/UpdateProfile";

jest.mock("react-redux");

describe("update button test", () => {
  test("should open update form", () => {
    useSelector.mockImplementation((cb) => cb({ user: { userData: true } }));
    const { queryByTestId } = render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );
    const button = queryByTestId("update-button");
    expect(queryByTestId("modal")).toBeNull;
    fireEvent.click(button);
    expect(queryByTestId("modal")).toBeInTheDocument();
  });
});
