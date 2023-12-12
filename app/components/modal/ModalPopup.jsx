import React, { useState } from "react";

const ModalPopup = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close absolute z-40 text-red" onClick={onClose}>
              close
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopup;
