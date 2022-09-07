import Script from "next/script";
import { useRouter } from "next/router";

import { Background, Footer, Header, HomeView } from "../components";

export default function Home() {
  return (
    <>
      <div>
        <Script src="https://cdn.lordicon.com/xdjxvujz.js"></Script>
        <Background>
          <Header />
          <HomeView />
          <Footer />
        </Background>
      </div>
    </>
  );
}
