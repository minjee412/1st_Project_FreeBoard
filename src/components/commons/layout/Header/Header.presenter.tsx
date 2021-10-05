import { useRouter } from "next/router";
import { InnerButton, InnerLogo, InnerWrapper, Wrapper } from "./Header.styles";

export default function HeaderUI(props: any) {
  const router = useRouter();

  function onClickJoin() {
    router.push(`/join`);
  }

  function onClickLogin() {
    router.push(`/login`);
  }

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerLogo onClick={props.onClicklogo}></InnerLogo>
          <div>
            <span style={{ color: "blue" }}>
              {props.data?.fetchUserLoggedIn.name}
            </span>
            <span>님 환영 합니다.</span>
            <InnerButton
              src="/header/logo/회원가입.png"
              onClick={onClickJoin}
            ></InnerButton>
            <InnerButton
              src="/header/logo/login.png"
              onClick={onClickLogin}
            ></InnerButton>
          </div>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
