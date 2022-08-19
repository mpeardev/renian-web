import { useEffect } from "react";
import { useConnect } from "../../hook/useConnect";
import Dashboard from "../organisms/Dashboard/Dashboard";
import { useRouter } from "next/router";

export const CPanelView = () => {
  const router = useRouter();
	const {auth, loading} = useConnect();

  useEffect(() => {
		loading && !auth && router.push("/login");
	}, [auth]);

	return <>{loading  && auth && <Dashboard />}</>;
};
