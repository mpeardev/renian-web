import { useState } from "react";
import { Background, Footer, Header, HomeView, MainAlert } from "../components";

export default function Home() {
  const [show, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [alertActive, setAlertActive] = useState(false);

  return (
    <>
      <Header show={show} setShow={setShow} isOpen={isOpen} setOpen={setOpen} />
      <div
      // style={
      //   show || alertActive
      //     ? { overflow: "hidden", height: "100vh" }
      //     : { overflow: "auto", height: "auto" }
      // }
      >
        <HomeView setAlertActive={setAlertActive} />
        <Footer />
        {alertActive && <MainAlert setAlertActive={setAlertActive} />}
      </div>
    </>
  );
}
