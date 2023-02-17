import { useEffect, useRef } from "react";
import styles from "./ProfileMenu.module.css";

const ProfileMenu = ({ links, onClickOutside, isMenuOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target) && isMenuOpen) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  return isMenuOpen ? (
    <div ref={menuRef} className={styles.ProfileMenu}>
      <ul>
        {links?.map((link) => {
          return (
            <li key={link.id}>
              <a className={styles.link} href={link.href}>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};

export default ProfileMenu;
