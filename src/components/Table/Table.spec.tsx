import { render } from "@testing-library/react";
import Table from ".";

jest.mock('react-redux', () => {
  return {
    useSelector() {
      return []
    }
  }
})

describe('Table Component', () => {
  it("render correctly", () => {
    render(<Table />);
  });
});