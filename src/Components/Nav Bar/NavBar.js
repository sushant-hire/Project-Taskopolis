import React from "react";
import styles from "./NavBar.module.css";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import { useRecoilState } from "recoil";
import { LoginAtom } from "../../Atom/Login Atom/LoginAtom";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isLogin, setIsLogin] = useRecoilState(LoginAtom);
  const navigate = useNavigate();

  function HandleLogOut() {
    setIsLogin(false);
    navigate("/");
  }

  return (
    <nav>
      <ul className={styles.NavBarContainer}>
        <Link to="/" className={styles.HomeLink}>
          {" "}
          <li className={styles.NavListTaskopolis}>
            {" "}
            <FactCheckRoundedIcon
              className={styles.LogoTaskopolis}
              fontSize="large"
            />{" "}
            Taskopolis
          </li>
        </Link>
        {isLogin ? (
          <button className={styles.NavListLogout} onClick={HandleLogOut}>
            Log out
          </button>
        ) : (
          <Link className={styles.NavListGetStarted} to="/register">
            <li>Register Now</li>{" "}
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
