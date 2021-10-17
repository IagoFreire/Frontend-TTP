export enum ActionTypes {
  addEmployee = 'ADD_EMPLOYEE',
  updateEmployee = 'UPDATE_EMPLOYEE',
  deleteEmployee = 'DELETE_EMPLOYEE',
}

export interface IEmploeey {
  nome: string,
  cpf: string,
  salario: number,
  desconto: number,
  dependentes: number
}