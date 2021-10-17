import React, { FormEvent, useCallback, useState } from 'react';
import Modal from "react-modal";
import { useDispatch } from 'react-redux';

import closeImg from "../../assets/close.svg";
import { IEmploeey } from '../../models/emploeey';
import { addEmployee } from '../../store/modules/employees/action';
import { Container } from './styles';

interface NewEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewEmployeeModal: React.FC<NewEmployeeModalProps> = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [salary, setSalary] = useState(0);
  const [socialSecurityDiscount, setSocialSecurityDiscount] = useState(0);
  const [dependentsNumber, setDependentsNumber] = useState(0);

  const getAliquotAndTranche = (salary: number) => {
    if (salary <= 1903.98) {
      return { aliquot: 0, tranche: 0 };
    }

    if (salary <= 2826.65) {
      return { aliquot: 7.5, tranche: 142 };
    }

    if (salary <= 3751.05) {
      return { aliquot: 15, tranche: 354.80 };
    }

    if (salary <= 4664.68) {
      return { aliquot: 22.5, tranche: 636.13 };
    }

    if (salary > 4664.68) {
      return { aliquot: 27.5, tranche: 869.36 };
    }

    return { aliquot: 0, tranche: 0 };
  }

  const handleClearAndCloseModal = () => {
    setName("");
    setCPF("");
    setSalary(0);
    setSocialSecurityDiscount(0);
    setDependentsNumber(0);
    onRequestClose();
  }

  const handleAddEmployee = useCallback((event: FormEvent) => {
    event.preventDefault();

    const aliquotAndTranche = getAliquotAndTranche(salary)

    const salaryBaseIR = salary - socialSecurityDiscount - (dependentsNumber * 164.56);
    const descontoIRPF = (salaryBaseIR * aliquotAndTranche.aliquot/100) - aliquotAndTranche.tranche;

    const employee: IEmploeey = {
      cpf,
      dependentes: dependentsNumber,
      desconto: socialSecurityDiscount,
      nome: name,
      salario: salary,
      descontoIRPF,
    }

    dispatch(addEmployee(employee));
    
    setName("");
    setCPF("");
    setSalary(0);
    setSocialSecurityDiscount(0);
    setDependentsNumber(0);
    onRequestClose();

  }, [cpf, dependentsNumber, dispatch, name, onRequestClose, salary, socialSecurityDiscount]);

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

      <Container onSubmit={handleAddEmployee}>
        <h2>Registrar Funcionário</h2>

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
          value={socialSecurityDiscount === 0 ? undefined : socialSecurityDiscount}
          onChange={(event) => setSocialSecurityDiscount(Number(event.target.value))}
        />

        <input
          type="number"
          placeholder="Número de dependentes"
          value={dependentsNumber === 0 ? undefined : dependentsNumber}
          onChange={(event) => setDependentsNumber(Number(event.target.value))}
        />

        <button type="submit">Registrar</button>
      </Container>
    </Modal>
  );
}

export default NewEmployeeModal;