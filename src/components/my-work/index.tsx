import LocaleSwitcher from "./locale-switcher";
import { useTranslation } from "next-i18next";

export default function Navigation() {
  const { t } = useTranslation("");

  return (
    <nav>
      <div>
        <a>{t("header.Home")}</a>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
