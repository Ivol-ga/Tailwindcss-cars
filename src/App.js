import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Modal from "./components/Modal";
import NotFound from "./components/pages/NotFound";
import Spinner from "./components/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsModalOpen(true);
      setIsLoading(false);
    }, 3000);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <Spinner />
            ) : (
              <Main
                isLoading={isLoading}
                openModal={openModal}
                closeModal={closeModal}
                active={isModalOpen}
                setActive={setIsModalOpen}
              />
            )
          }
        />
        <Route path="*" element={<NotFound isLoading={isLoading} />} />
      </Routes>
      <Modal
        active={isModalOpen}
        setActive={setIsModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
