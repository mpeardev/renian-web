import { useEffect } from "react";
import { LoginOwner } from "../../components";
import { useConnect } from "../../hook/useConnect";
import { useRouter } from "next/router";

export const LoginView = () => {
  const router = useRouter();
  const { auth, loading } = useConnect();

  useEffect(() => {
    loading && auth && router.push("/cpanel");
  }, [auth, loading]);

  return <>{loading && !auth && <LoginOwner />}</>;
};
