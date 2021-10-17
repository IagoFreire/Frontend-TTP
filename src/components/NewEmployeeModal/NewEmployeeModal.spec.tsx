import { render } from "@testing-library/react";
import NewEmployeeModal from ".";

jest.mock('react-redux', () => {
  return {
    useDispatch() {
      return () => {}
    }
  }
})

describe('NewEmployeeModal Component', () => {
  it("render correctly", () => {
    render(<NewEmployeeModal isOpen={true} onRequestClose={() => {}}  />);
  });
});