import React from 'react';

import { Container } from './styles';

interface HeaderProps {
  onOpenNewEmployeeModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewEmployeeModal }) => {
  return (
    <Container>
      <div className="alignTitle">
        <span>
          Tabelas e cálculos do IRPF
        </span>
      </div>
      <button type="button" onClick={onOpenNewEmployeeModal}>
        Registrar Funcionário
      </button>
    </Container>
  );
}

export default Header;