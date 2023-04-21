import { useAppDispatch } from "../../../redux/app/hooks";
import { toggleSidebarState } from "../../../redux/features/sidebarState";
import "./sideNavIcon.css";

export const SideNavIcon = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="side-nav-icon">
      <label htmlFor="check">
        <input
          onClick={() => dispatch(toggleSidebarState())}
          type="checkbox"
          id="check"
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};
