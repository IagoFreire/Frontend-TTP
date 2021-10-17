import { ActionTypes, IEmploeey } from "./types";

export function addEmployee(employee: IEmploeey) {
    return {
        type: ActionTypes.addEmployee,
        payload: {
          employee,
        }
    }
}