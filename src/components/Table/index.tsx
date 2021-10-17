import React, { useState } from "react";
import { useSelector } from "react-redux";

import { IEmploeey } from "../../models/emploeey";
import { IState } from "../../store/modules/employees/types";
import EditEmployeeModal from "../EditEmployeeModal";

import { Container } from "./styles";

const Table: React.FC = () => {
  const [currentEmploeey, setCurrentEmployee] = useState<IEmploeey>();

  const employees = useSelector<IState, IEmploeey[]>(
    (state) => state.employees
  );

  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);

  const handleOpenEditEmployeeModal = (employee: IEmploeey) => {
    setCurrentEmployee(employee);
    setIsEditEmployeeModalOpen(true);
  };

  const handleCloseEditEmployeeModal = () => {
    setCurrentEmployee(undefined);
    setIsEditEmployeeModalOpen(false);
  };

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Salário</th>
              <th>Desconto</th>
              <th>Dependentes</th>
              <th>Desconto IRPF</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                onClick={() => handleOpenEditEmployeeModal(employee)}
                key={employee.cpf}
              >
                <td>{employee.nome}</td>
                <td>{employee.cpf}</td>
                <td>{formatMoney(employee.salario)}</td>
                <td>{formatMoney(employee.desconto)}</td>
                <td>{employee.dependentes}</td>
                <td>{formatMoney(employee.descontoIRPF)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      {isEditEmployeeModalOpen && (
        <EditEmployeeModal
          isOpen={isEditEmployeeModalOpen}
          onRequestClose={handleCloseEditEmployeeModal}
          emploeey={currentEmploeey}
        />
      )}
    </>
  );
};

export default Table;
