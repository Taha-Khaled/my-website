import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
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
    <span>
      {otherLocales?.map((locale) => (
        <span key={"locale-" + locale}>
          <Link href={{ pathname, query }} as={asPath} locale={locale}>
            {locale === "en" ? "English" : locale === "ar" ? "عربي" : null}
          </Link>
        </span>
      ))}
    </span>
  );
}
