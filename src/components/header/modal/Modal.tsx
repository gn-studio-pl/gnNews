import React from "react";
import "./modal.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ open, onClose }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <p>Worst: setting up redux 😆</p>
        <p>Best: I generally like tinkering with css</p>
        <button onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
};
