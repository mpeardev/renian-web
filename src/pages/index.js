import { Background, Footer, Header, HomeView } from "../components";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/maintenance");
  // });
  return (
    <>
      <div>
        <Header />
        <HomeView />
        <Footer />
      </div>
    </>
  );
}
