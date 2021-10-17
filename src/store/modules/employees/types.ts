import { IEmploeey } from "../../../models/emploeey";

export enum ActionTypes {
  addEmployee = 'ADD_EMPLOYEE',
  updateEmployee = 'UPDATE_EMPLOYEE',
  deleteEmployee = 'DELETE_EMPLOYEE',
}

export interface IState {
  employees: IEmploeey[];
}