import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { handelTitle } from "@/utils/handelTitle";
import { useTheme } from "next-themes";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Portfolio from "@/components/sections/Portfolio";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Landing from "@/components/sections/Landing";
import styles from "../styles/Home.module.scss";
import { _mockedData } from "@/pages/api/_mockedData";
interface THome {
  data: typeof _mockedData;
}
export default function Home({ data }: THome) {
  const { asPath } = useRouter();
  const { resolvedTheme } = useTheme();
  return (
    <>
      <Head>
        <title>{handelTitle(asPath)}</title>
        {resolvedTheme === "dark" ? (
          <link rel="shortcut icon" href="/assets/myLogo-darkMode.png" />
        ) : (
          <link rel="shortcut icon" href="/assets/myLogo.png" />
        )}
      </Head>
      <Navbar navigators={data?.navbar} />
      <main className={styles.main}>
        <Landing />
        <About />
        <Service />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const data = await Promise.resolve(_mockedData);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}
