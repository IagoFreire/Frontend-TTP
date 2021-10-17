import React, { FormEvent, useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import closeImg from "../../assets/close.svg";
import { IEmploeey } from "../../models/emploeey";
import {
  deleteEmployee,
  updateEmployee,
} from "../../store/modules/employees/action";

import { Container } from "./styles";

interface EditEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  emploeey?: IEmploeey;
}

const EditEmployeeModal: React.FC<EditEmployeeModalProps> = ({
  isOpen,
  onRequestClose,
  emploeey,
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [salary, setSalary] = useState(0);
  const [socialSecurityDiscount, setSocialSecurityDiscount] = useState(0);
  const [dependentsNumber, setDependentsNumber] = useState(0);

  useEffect(() => {
    if (emploeey) {
      setName(emploeey.nome);
      setCPF(emploeey.cpf);
      setSalary(emploeey.salario);
      setSocialSecurityDiscount(emploeey.desconto);
      setDependentsNumber(emploeey.dependentes);
    }
  }, [emploeey]);

  const getAliquotAndTranche = (salary: number) => {
    if (salary <= 1903.98) {
      return { aliquot: 0, tranche: 0 };
    }

    if (salary <= 2826.65) {
      return { aliquot: 7.5, tranche: 142 };
    }

    if (salary <= 3751.05) {
      return { aliquot: 15, tranche: 354.8 };
    }

    if (salary <= 4664.68) {
      return { aliquot: 22.5, tranche: 636.13 };
    }

    if (salary > 4664.68) {
      return { aliquot: 27.5, tranche: 869.36 };
    }

    return { aliquot: 0, tranche: 0 };
  };

  const handleClearAndCloseModal = useCallback(() => {
    setName("");
    setCPF("");
    setSalary(0);
    setSocialSecurityDiscount(0);
    setDependentsNumber(0);
    onRequestClose();
  }, [onRequestClose]);

  const handleEditEmployee = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const aliquotAndTranche = getAliquotAndTranche(salary);

      const salaryBaseIR =
        salary - socialSecurityDiscount - dependentsNumber * 164.56;
      const descontoIRPF =
        (salaryBaseIR * aliquotAndTranche.aliquot) / 100 -
        aliquotAndTranche.tranche;

      const employee: IEmploeey = {
        cpf,
        dependentes: dependentsNumber,
        desconto: socialSecurityDiscount,
        nome: name,
        salario: salary,
        descontoIRPF,
      };

      dispatch(updateEmployee(employee));

      handleClearAndCloseModal();
    },
    [
      cpf,
      dependentsNumber,
      dispatch,
      handleClearAndCloseModal,
      name,
      salary,
      socialSecurityDiscount,
    ]
  );

  const handleDeleteEmployee = useCallback(
    (emploeeyCPF: string) => {
      dispatch(deleteEmployee(emploeeyCPF));
      handleClearAndCloseModal();
    },
    [dispatch, handleClearAndCloseModal]
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClearAndCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={handleClearAndCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleEditEmployee}>
        <h2>Editar Funcionário</h2>

        <input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          placeholder="CPF"
          value={cpf}
          onChange={(event) => setCPF(event.target.value)}
        />

        <input
          type="number"
          placeholder="Salário"
          value={salary === 0 ? undefined : salary}
          onChange={(event) => setSalary(Number(event.target.value))}
        />

        <input
          type="number"
          placeholder="Desconto da previdência"
          value={
            socialSecurityDiscount === 0 ? undefined : socialSecurityDiscount
          }
          onChange={(event) =>
            setSocialSecurityDiscount(Number(event.target.value))
          }
        />

        <input
          type="number"
          placeholder="Número de dependentes"
          value={dependentsNumber === 0 ? undefined : dependentsNumber}
          onChange={(event) => setDependentsNumber(Number(event.target.value))}
        />

        <div className="alignActionsButtons">
          <button
            className="delete"
            type="button"
            onClick={() => {
              if (emploeey && emploeey.cpf) {
                handleDeleteEmployee(emploeey.cpf);
              }
            }}
          >
            Excluir
          </button>
          <button className="save" type="submit">
            Salvar
          </button>
        </div>
      </Container>
    </Modal>
  );
};

export default EditEmployeeModal;
