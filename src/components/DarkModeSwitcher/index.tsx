import styles from "./darkModeSwitcher.module.scss";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import { useTheme } from "next-themes";
const ModeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handelToggle = () => {
    setTheme(resolvedTheme == "light" ? "dark" : "light");
  };
  return (
    <div className={styles.modeSwitcher}>
      <input
        type="checkbox"
        id="darkMode-toggle"
        className={styles.input}
        checked={resolvedTheme === "dark"}
        onChange={handelToggle}
      />
      <label htmlFor="darkMode-toggle" className={styles.label}>
        <MoonIcon className={styles.moon} />
        <SunIcon className={styles.sun} />
      </label>
    </div>
  );
};
export default ModeSwitcher;
