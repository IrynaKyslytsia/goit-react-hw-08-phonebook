import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div>
      <NavLink 
      className={css.link} 
      style={({ isActive }) => ({
        color: isActive ? '#F07F2E' : '#2C2C2C',
      })}
      to="/register">
        Register
      </NavLink>
      <NavLink 
      className={css.link}
      style={({ isActive }) => ({
        color: isActive ? '#F07F2E' : '#2C2C2C',
      })} 
      to="/login">
        Log In
      </NavLink>
    </div>
    )
};

export default AuthNav;