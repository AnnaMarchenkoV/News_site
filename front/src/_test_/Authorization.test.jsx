const { render } = require("@testing-library/react");
const { useSelector } = require("react-redux");
const {
  default: Authorization,
} = require("../components/Header/Authorization");

jest.mock("react-redux");

describe("Authorization  component", () => {
  test("should render error message", () => {
    useSelector.mockImplementation((cb) => cb({ user: { error: true } }));
    const { getByTestId } = render(<Authorization />);
    const authorizationComponent = getByTestId("authorization");
    const errorMessage = getByTestId("error");
    expect(authorizationComponent).toContainElement(errorMessage);
  });

  test("should not render error message", () => {
    useSelector.mockImplementation((cb) => cb({ user: { error: false } }));
    const { queryByTestId } = render(<Authorization />);
    const errorMessage = queryByTestId("error");
    expect(errorMessage).toBeNull();
  });
});
