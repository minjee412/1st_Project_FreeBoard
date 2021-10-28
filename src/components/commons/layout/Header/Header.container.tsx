import HeaderUI from "./Header.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { FETCH_USER_LOGGED_IN } from "./Header.query";

export default function Header() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { accessToken, setAccessToken } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  function onClicklogo() {
    router.push("/boards");
  }

  function onClickJoin() {
    router.push("/join");
  }

  function onClickLogin() {
    router.push("/login");
  }

  function onClickLogout() {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    setAccessToken(" ");
  }

  function onClickCharge() {
    setIsOpen(true);
  }

  function onOk() {
    setIsOpen(false);
  }

  function onCancel() {
    setIsOpen(false);
  }

  return (
    <HeaderUI
      onClicklogo={onClicklogo}
      onClickJoin={onClickJoin}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      data={data}
      onClickCharge={onClickCharge}
      isOpen={isOpen}
      onOk={onOk}
      onCancel={onCancel}
    />
  );
}
