import { useQuery } from "@apollo/client";
import router from "next/router";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGED_IN } from "./Header.query";

export default function Header() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onClicklogo() {
    router.push("/boards");
  }

  return <HeaderUI onClicklogo={onClicklogo} data={data} />;
}
