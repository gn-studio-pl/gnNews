import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  title?: string;
  onClick: () => void;
  icon?: JSX.Element;
  active?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, icon, active, onClick }) => {

  console.log(active)
  return (
    <button title={title} onClick={onClick} className={`${styles.button} ${active && styles.active}`}>
     <span>{icon}</span>
    </button>
  );
};

export default Button;