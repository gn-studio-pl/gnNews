import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { getValue } from "../../features/newsCounter/newsCounter";
import { toggleSidebarState } from "../../features/sidebarState/sidebarState";
import { NewsLayoutBtn } from "../../features/newsLayout/NewsLayoutBtn";
import { Modal } from "./modal/Modal";
import "./header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="logo-sidebar">
        <div className="side-nav-icon">
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            <span onClick={() => dispatch(toggleSidebarState())}></span>
            <span onClick={() => dispatch(toggleSidebarState())}></span>
            <span onClick={() => dispatch(toggleSidebarState())}></span>
          </label>
        </div>
        <Link onClick={() => dispatch(getValue(0))} to="/">
          <h1>
            gn<span>News</span>
          </h1>
        </Link>
      </div>
      <div className="nav-btns">
        <NewsLayoutBtn />
        <button onClick={() => setIsOpen(true)}>Popup</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};
