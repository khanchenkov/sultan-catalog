import { render, screen } from "@testing-library/react";
import HeaderPanel from "../components/HeaderPanel/HeaderPanel";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("Renders cart length", () => {
  render(<HeaderPanel cartLength={3} cartSum={0} />);
  const cartElement = screen.getByRole("contentinfo");
  expect(cartElement).toBeInTheDocument();
  expect(cartElement).toHaveTextContent("3");
});

