import { render } from "@testing-library/react";
import Header from ".";

describe('Header Component', () => {
  it("render correctly", () => {
    render(<Header onOpenNewEmployeeModal={() => {}} />);
  });
});

