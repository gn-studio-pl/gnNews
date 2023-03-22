import "../styles/components/navbar_style.scss";
import { Logo } from "./UI/Logo";
import { Button } from "./UI/Button";
import { ToggleSwitch } from "./UI/ToggleSwitch";

export const Navbar = () => {
  return (
    <nav>
      <Logo />
      <div>
        <Button>informacje</Button>
        <ToggleSwitch />
      </div>
    </nav>
  );
};
