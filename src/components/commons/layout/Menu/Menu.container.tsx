import { useRouter } from "next/router";
import NaviUI from "./Menu.presenter";

export default function Navi() {
  const router = useRouter();

  function onClickMenu(event) {
    router.push(event.target.id);
  }

  return <NaviUI onClickMenu={onClickMenu} />;
}
