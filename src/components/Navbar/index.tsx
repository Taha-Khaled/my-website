import { useTranslation } from "next-i18next";
import styles from "./navbar.module.scss";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import ModeSwitcher from "../DarkModeSwitcher";
import Image from "next/image";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
interface TNavbar {
  navigators: string[];
}
const Navbar: FunctionComponent<TNavbar> = ({ navigators }) => {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  const RenderNavigators = () => (
    <ul className={styles.navigators}>
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
    </ul>
  );
  return (
    <nav className={styles.navbar}>
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
      <RenderNavigators />
      <div className={styles.actions}>
        <LanguageSwitcher />
        <ModeSwitcher />
        <button className={styles.resume} title="resume">
          Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
