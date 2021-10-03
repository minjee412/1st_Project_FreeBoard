import { Logo, Input_Wrapper, Input_Title, Input } from "../join/join.styles";
import { Wrapper, Login_Button } from "./login.styles";

export default function LoginPagePresenter(props: any) {
  return (
    <>
      <Wrapper>
        <div style={{ display: "row", alignItems: "center" }}>
          <Logo src="/header/logo/여행연구소.png" />
          <span style={{ fontSize: "36px" }}>로그인</span>
        </div>

        <Input_Wrapper>
          <Input_Title>이메일</Input_Title>
          <Input
            type="text"
            placeholder="이메일을 입력 해주세요."
            onChange={props.onChangeEmail}
          />
        </Input_Wrapper>

        <Input_Wrapper>
          <Input_Title>비밀번호</Input_Title>
          <Input
            type="password"
            placeholder="비밀번호를 입력 해주세요."
            onChange={props.onChangePassword}
          />
        </Input_Wrapper>

        <Login_Button onClick={props.onClickLogin} isActive={props.isActive}>
          로그인
        </Login_Button>
      </Wrapper>
    </>
  );
}
