import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  const { accessToken } = useContext(GlobalContext);

  //accessToken이 있는가 ?!
  //accessToken이 없다면, login 페이지로 보내기 !
  useEffect(() => {
    const accessItem = sessionStorage.getItem("accessToken");
    if (!accessItem) {
      alert("로그인 한 사람만 입장 가능 합니다.");
      router.push("/login");
    }
  }, [accessToken]);

  return <Component {...props} />;
};
