import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDragon } from "@fortawesome/free-solid-svg-icons";
import "./NavBarComponent.css";

const NavBarComponent = () => {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <NavLink
          className="nav-link"
          aria-current="page"
          to="/login"
          activeClassName="activeLink"
        >
          סל קניות
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink
          className="nav-link"
          aria-current="page"
          to="/cardspanel"
          activeClassName="activeLink"
        >
          מוצרים{" "}
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink
          className="nav-link"
          aria-current="page"
          to="/home"
          activeClassName="activeLink"
        >
          Nicnor
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBarComponent;
