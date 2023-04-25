import { useTranslation } from "next-i18next";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import LocaleSwitcher from "../my-work/locale-switcher";

const Navbar = () => {
  const { t } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();
  const handelToggle = () => {
    setTheme(resolvedTheme == "light" ? "dark" : "light");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoHolder}>
        <Link href={"/"}>Taha</Link>
      </div>
      <div className={styles.navigators}>
        <Link href={"#Home"}>Home</Link>
        <Link href={"#About"}>About</Link>
        <Link href={"#Service"}>Service</Link>
        <Link href={"#Portfolio"}>Portfolio</Link>
        <Link href={"#Blog"}>Blog</Link>
        <Link href={"#Contact"}>Contact</Link>
      </div>
      <div className={styles.btnHolder}>
        <button title="resume">Download Resume</button>
        <button title="resume" onClick={handelToggle}>
          change mode
        </button>
        <button title="resume">
          <LocaleSwitcher />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
