import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <Component {...pageProps} />
    </div>
  );
}
export default appWithTranslation(App);
