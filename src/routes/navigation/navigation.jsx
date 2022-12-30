import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.scss";

const Navigation = () => (
  <Fragment>
    <nav className="navigation">
      <Link to="/">
        <CrwnLogo />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          SHOP
        </Link>
        <Link to="/sign-in" className="nav-link">
          SIGN IN
        </Link>
      </div>
    </nav>
    <Outlet />
  </Fragment>
);

export default Navigation;
