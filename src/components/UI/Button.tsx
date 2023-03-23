import "../../styles/components/UI/button_style.scss";

type props = {
  children: string;
};

export const Button = ({ children }: props) => {
  return <button className="styled_button">{children}</button>;
};
