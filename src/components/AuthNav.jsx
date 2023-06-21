const { NavLink } = require("react-router-dom")


const AuthNav = () => {
    return (
        <div>
      <NavLink to="/register">
        Sign up
      </NavLink>
      <NavLink to="/login">
        Log in
      </NavLink>
    </div>
    )
};

export default AuthNav;