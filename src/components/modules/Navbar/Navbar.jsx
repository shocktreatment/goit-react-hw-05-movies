import { NavLink } from 'react-router-dom';
import items from '../items';
import s from './navbar.module.css';

const Navbar = () => {
  return (
    <ul className={s.list}>
      {items.map(({ id, text, link }) => (
        <li key={id}>
          <NavLink to={link} className={s.link}>
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export { Navbar };
