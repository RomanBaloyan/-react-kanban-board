import styles from "./Header.module.css";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link className={styles.logo} to={"/"}>
        Awesome Kanban Board
      </Link>
      <Profile />
    </header>
  );
};

export default Header;
