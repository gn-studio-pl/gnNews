import React from 'react';
import styles from './styles.module.scss';

interface IconButtonProps {
  title?: string;
  onClick: () => void;
  icon?: JSX.Element;
  active?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ title, icon, active, onClick }) => {
  return (
    <button title={title} onClick={onClick} className={`${styles.iconButton} ${active && styles.active}`}>
      <span>{icon}</span>
    </button>
  );
};

export default IconButton;
