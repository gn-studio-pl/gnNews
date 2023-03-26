import styles from './styles.module.scss';
import { Link, useLocation  } from 'react-router-dom';

interface NavLinkProps {
  path: string;
  title: string;
  icon?: string;
  onClick?: () => void
}
//<Link to={`/item/${item.id}`}>


const NavLink: React.FC<NavLinkProps> = ({ path, title, icon, onClick }) => {
  const location = useLocation()
  
  return (
    <Link to={path} onClick={onClick} className={`${styles.navLink} ${location.pathname === path && styles.active}`}>
      <img src={icon}/>
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
