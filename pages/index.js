import Head from "next/head";
import Script from "next/script";
import { Background } from "../components/atoms/brackground";
import { Footer } from "../components/organisms/Footer/Footer";
import { Header } from "../components/organisms/Header/Header";
import { HomeView } from "../components/templates/HomeView/HomeView";

export default function Home() {
  return (
    <div>
      <Script src="https://cdn.lordicon.com/xdjxvujz.js"></Script>
      <Background>
        <Header />
        <HomeView />
        <Footer />
      </Background>
    </div>
  );
}
