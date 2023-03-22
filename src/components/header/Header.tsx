import React, { useState } from "react";
import "./header.css";
import { Modal } from "./modal/Modal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1>
        gn<span>News</span>
      </h1>
      <div className="nav-btns">
        <button>LIST / TILES</button>
        <button onClick={() => setIsOpen(true)}>Popup</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};
