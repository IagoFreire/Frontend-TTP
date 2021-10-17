import React, { useState } from "react";
import Header from "../../components/Header";
import NewEmployeeModal from "../../components/NewEmployeeModal";
import Table from "../../components/Table";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);

  const handleOpenNewEmployeeModal = () => {
    setIsNewEmployeeModalOpen(true);
  };

  const handleCloseNewEmployeeModal = () => {
    setIsNewEmployeeModalOpen(false);
  };

  return (
    <>
      <Container>
        <Header onOpenNewEmployeeModal={handleOpenNewEmployeeModal} />
        <div className="content">
          <span className="title">Seus Funcionários</span>
          <Table />
        </div>
      </Container>
      {isNewEmployeeModalOpen && (
        <NewEmployeeModal
          isOpen={isNewEmployeeModalOpen}
          onRequestClose={handleCloseNewEmployeeModal}
        />
      )}
    </>
  );
};

export default Home;
