import styles from "./languageSwitcher.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LanguageSwitcher() {
  const {
    locales,
    locale: activeLocale,
    pathname,
    query,
    asPath,
  } = useRouter();

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <div className={styles.languageSwitcher}>
      {otherLocales?.map((locale) => (
        <span key={"locale-" + locale}>
          <Link href={{ pathname, query }} as={asPath} locale={locale}>
            {locale === "en" ? "English" : locale === "ar" ? "عربي" : null}
          </Link>
        </span>
      ))}
    </div>
  );
}
