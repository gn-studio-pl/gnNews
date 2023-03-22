import { NavLink } from "react-router-dom";
import "../styles/components/sidebar_style.scss";

export const Sidebar = () => {
  return (
    <aside>
      {/* <NavLink to="/">Sidebar</NavLink> */}
      <a href="/">
        <img src="../../public/icons/cards.svg" alt="flag" />
        SIDEBAR
      </a>
    </aside>
  );
};
