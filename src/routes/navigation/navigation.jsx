import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "../../contexts/user-context/user-context";
import { UserContext } from "../../contexts/user-context/user-context";
import { signUserOut } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signUserOut();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <nav className="navigation">
        <Link to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
