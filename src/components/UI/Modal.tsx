import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { CHANGE_IS_OPEN } from "../../store/modal/modalSlice";

import "../../styles/components/UI/modal_style.scss";

export const Modal = () => {
  const dispatch = useDispatch();
  const article = useSelector((state: RootState) => {
    return state.modal.article;
  });

  return (
    <div className="modal_ovelay" onClick={() => dispatch(CHANGE_IS_OPEN())}>
      <div className="modal_box">
        <p>{article.author}</p>
        <p>{article.title}</p>
        <a href={article.url}>Link</a>
      </div>
    </div>
  );
};
