import React, { useState } from "react";
import Modal from "./Modal";

const ModelHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open Modal
  const openModal = () => setIsModalOpen(true);

  // Close Modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>React Portal Demo</h1>
        <button onClick={openModal}>Open Modal</button>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is a simple modal using React Portals.</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default ModelHome;
