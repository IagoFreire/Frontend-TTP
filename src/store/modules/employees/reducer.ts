import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes, IEmploeey } from "./types";

const INITIAL_STATE: IEmploeey[] = [];

const cart: Reducer<IEmploeey[]> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addEmployee: {
        const { employee } = action.payload;

        draft.push(employee);
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
