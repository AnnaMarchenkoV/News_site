const { render } = require("@testing-library/react");
const { default: NewPost } = require("../components/Profile/NewPost");

jest.mock("react-redux");

describe("NewPost  component", () => {
  test("should render create post button", () => {
    const { getByTestId } = render(<NewPost />);
    const newPost = getByTestId("new-post");
    const createButton = getByTestId("create-post-button");
    expect(newPost).toContainElement(createButton);
  });
});
