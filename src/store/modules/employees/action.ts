import { IEmploeey } from "../../../models/emploeey";
import { ActionTypes } from "./types";

export function addEmployee(employee: IEmploeey) {
    return {
        type: ActionTypes.addEmployee,
        payload: {
          employee,
        }
    }
}

export function updateEmployee(employee: IEmploeey) {
  return {
      type: ActionTypes.updateEmployee,
      payload: {
        employee,
      }
  }
}

export function deleteEmployee(emploeeyCPF: string) {
  return {
      type: ActionTypes.deleteEmployee,
      payload: {
        emploeeyCPF,
      }
  }
}