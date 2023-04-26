import { useTranslation } from "next-i18next";
import styles from "./navbar.module.scss";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import ModeSwitcher from "../DarkModeSwitcher";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
interface TNavbar {
  navigators: string[];
}
const Navbar: FunctionComponent<TNavbar> = ({ navigators }) => {
  const { t } = useTranslation();
  const { asPath } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const RenderNavigators = () => {
    return (
      <>
        {navigators?.map((item: string) => (
          <li key={item}>
            <Link
              className={styles.navigator}
              is-active={asPath?.includes(item)?.toString()}
              href={`#${item}`}
            >
              <p>{t(item)}</p>
              <hr />
            </Link>
          </li>
        ))}
      </>
    );
  };
  const RenderLogoHolder = () => {
    return (
      <Link href={`#home`} className={styles.logoHolder}>
        <Image
          className={styles.myLogo}
          src={"/assets/myLogo.svg"}
          alt={"logo"}
          width={47}
          height={50}
        />
        <p>Taha</p>
      </Link>
    );
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <RenderLogoHolder />
        <div
          className={styles.hamburgerMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          is-expanded={isMenuOpen.toString()}
        >
          <div />
          <div />
          <div />
        </div>
        <ul className={styles.navigators} is-expanded={isMenuOpen.toString()}>
          <RenderNavigators />
          <li className={styles.navControl}>
            <button className={styles.resume} title="resume">
              Download Resume
            </button>
          </li>
          <li className={styles.navControl}>
            <LanguageSwitcher />
            <ModeSwitcher />
          </li>
        </ul>
        <div className={styles.actions}>
          <div className={styles.switchers}>
            <LanguageSwitcher />
            <ModeSwitcher />
          </div>
          <button className={styles.resume} title="resume">
            Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
