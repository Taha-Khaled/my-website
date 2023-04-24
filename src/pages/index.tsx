import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/my-work";

export default function Home() {
  return <Navigation />;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
