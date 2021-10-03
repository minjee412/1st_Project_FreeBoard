import {
  Input_Title,
  Input,
  Input_Wrapper,
  Logo,
  Wrapper,
  Join_Button,
} from "./join.styles";

export default function JoinPagePresenter(props: any) {
  return (
    <>
      <Wrapper>
        <div style={{ display: "row", alignItems: "center" }}>
          <Logo src="/header/logo/여행연구소.png" />
          <span style={{ fontSize: "36px" }}>회원가입</span>
        </div>
        <Input_Wrapper>
          <Input_Title>이메일</Input_Title>
          <Input
            type="text"
            placeholder="이메일을 입력 해주세요."
            onChange={props.onChangeEmail}
          ></Input>
        </Input_Wrapper>

        <Input_Wrapper>
          <Input_Title>이름</Input_Title>
          <Input
            type="text"
            placeholder="이름을 입력 해주세요."
            onChange={props.onChangeName}
          ></Input>
        </Input_Wrapper>

        <Input_Wrapper>
          <Input_Title>비밀번호</Input_Title>
          <Input
            type="password"
            placeholder="비밀번호를 입력 해주세요."
            onChange={props.onChangePassword}
          ></Input>
        </Input_Wrapper>

        {/* <Input_Wrapper>
          <Input_Title>비밀번호 확인</Input_Title>
          <Input
            type="password"
            placeholder="비밀번호를 입력 해주세요."
          ></Input>
        </Input_Wrapper> */}

        <Join_Button onClick={props.onClickJoin} isActive={props.isActive}>
          회원가입하기
        </Join_Button>
      </Wrapper>
    </>
  );
}
