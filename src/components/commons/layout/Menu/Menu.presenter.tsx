import { Navi, SingleMenu } from "./Menu.styles";

export default function NaviUI(props) {
  return (
    <Navi>
      <SingleMenu id="/openapi" onClick={props.onClickMenu}>
        라이브고양이
      </SingleMenu>
      <SingleMenu id="/boards" onClick={props.onClickMenu}>
        자유게시판
      </SingleMenu>
      <SingleMenu>중고마켓</SingleMenu>
      <SingleMenu>마이페이지</SingleMenu>
    </Navi>
  );
}
