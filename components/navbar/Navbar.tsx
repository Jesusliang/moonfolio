import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { CgMenuRightAlt } from "react-icons/cg";
interface Props {}
const Navbar: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY < 500 && show) {
        setShow(false);
        setOpen(false);
      }
      if (scrollY > 500 && !show) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);

  return (
    <div
      className={`${styles.navbar} ${open ? styles.open : null} ${
        show ? styles.show : styles.hide
      }`}
    >
      <div className={styles.logo}>🌕</div>
      <ul style={{ display: !open ? "none" : undefined }}>
        <li>My work</li>
        <li>My skills</li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
      <div className={styles.burgerIcon} onClick={() => setOpen(!open)}>
        <CgMenuRightAlt />
      </div>
    </div>
  );
};
export default Navbar;
