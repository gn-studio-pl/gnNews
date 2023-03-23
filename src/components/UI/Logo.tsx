import { useNavigate } from "react-router-dom";
import "../../styles/components/UI/logo_style.scss";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <button className="logo" onClick={() => navigate("/")}>
      gn<span>News</span>
    </button>
  );
};
