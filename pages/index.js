import Script from "next/script";
import { useRouter } from "next/router";

import { Background, Footer, Header, HomeView } from "../components";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/login");
	}, []);

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
