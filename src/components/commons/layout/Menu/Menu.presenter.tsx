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
      <SingleMenu id="/market" onClick={props.onClickMenu}>
        중고마켓
      </SingleMenu>
    </Navi>
  );
}
