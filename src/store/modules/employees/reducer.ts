import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes } from "./types";
import { IEmploeey } from "../../../models/emploeey";

const INITIAL_STATE: IEmploeey[] = [];

const employees: Reducer<IEmploeey[]> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addEmployee: {
        const { employee } = action.payload;

        draft.push(employee);
        break;
      }

      case ActionTypes.updateEmployee: {
        const { employee } = action.payload;

        const employeeIndex = draft.findIndex(
          (emploeeyDraft) => employee.cpf === emploeeyDraft.cpf
        );
        draft[employeeIndex] = employee;

        break;
      }

      case ActionTypes.deleteEmployee: {
        const { emploeeyCPF } = action.payload;

        const employeeIndex = draft.findIndex(
          (emploeeyDraft) => emploeeyCPF === emploeeyDraft.cpf
        );
        draft.splice(employeeIndex, 1);

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default employees;
