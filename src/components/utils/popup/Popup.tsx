import "./popup.css";

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

export const Popup = ({ open, onClose }: PopupProps) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <p>Worst: setting up redux 😆</p>
        <p>Best: I generally like tinkering with css</p>
        <button onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
};
