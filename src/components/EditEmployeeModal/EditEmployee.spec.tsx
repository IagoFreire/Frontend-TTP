import { render } from "@testing-library/react";
import EditEmployeeModal from ".";

jest.mock('react-redux', () => {
  return {
    useDispatch() {
      return () => {}
    }
  }
})

describe('EditEmployeeModal Component', () => {
  it("render correctly", () => {
    render(<EditEmployeeModal isOpen={true} onRequestClose={() => {}}  />);
  });
});