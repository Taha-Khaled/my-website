import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <div dir={locale === "en" ? "ltr" : "rtl"}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
export default appWithTranslation(App);
