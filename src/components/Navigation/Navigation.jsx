import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";
import css from './Navigation.module.css';


const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <nav>
        <NavLink 
        className={css.link}
        style={({ isActive }) => ({
          color: isActive ? '#F07F2E' : '#2C2C2C',
        })}
        to="/">
          Home
        </NavLink>
      {isLoggedIn && (
        <NavLink 
        className={css.link}
        style={({ isActive }) => ({
          color: isActive ? '#F07F2E' : '#2C2C2C',
        })}
        to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
    );
    };
  
  export default Navigation;