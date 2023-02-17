import { useState } from "react";
import styles from "./Profile.module.css";
import { ReactComponent as UserPicture } from "../../assets/images/userpic.svg";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const links = [
  { id: 0, href: "#!", text: "Profile" },
  { id: 1, href: "#!", text: "Log Out" },
];

const Profile = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.Profile}>
      <button className={styles.button} onClick={toggleMenu}>
        <UserPicture />
      </button>
      <ProfileMenu
        links={links}
        onClickOutside={closeMenu}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};

export default Profile;
