import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { getValue } from "../../features/newsCounter/newsCounter";
import { NewsLayoutBtn } from "../../features/newsLayout/NewsLayoutBtn";
import { Modal } from "./modal/Modal";
import "./header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <Link onClick={() => dispatch(getValue(0))} to="/">
        <h1>
          gn<span>News</span>
        </h1>
      </Link>
      <div className="nav-btns">
        <NewsLayoutBtn />
        <button onClick={() => setIsOpen(true)}>Popup</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};
