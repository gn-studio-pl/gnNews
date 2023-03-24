import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleLayout } from "./newsLayout";
import "./newsLayoutBtn.css";

export const NewsLayoutBtn = () => {
  const newsLayoutState = useAppSelector(
    (state) => state.newsLayout.newsLayoutState
  );

  const dispatch = useAppDispatch();

  return (
    <button
      className="news-layout-btn"
      onClick={() => dispatch(toggleLayout())}
    >
      <span className={newsLayoutState === "list" ? "active-layout" : ""}>
        list
      </span>{" "}
      /{" "}
      <span className={newsLayoutState === "grid" ? "active-layout" : ""}>
        grid
      </span>
    </button>
  );
};
