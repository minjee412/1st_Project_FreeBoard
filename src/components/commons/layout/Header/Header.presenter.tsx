// import { withAuth } from "../../withAuth";
import {
  Button_Wrapper,
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Logout,
  Wrapper,
} from "./Header.styles";

export default function HeaderUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClicklogo}></InnerLogo>
        <div>
          {props.data?.fetchUserLoggedIn.name && (
            <>
              <Button_Wrapper>
                <span style={{ color: "blue" }}>
                  ⭐️ {props.data?.fetchUserLoggedIn.name}님 환영 합니다. ⭐️
                </span>

                <InnerButton src="/avatar.png" />
                <Logout onClick={props.onClickLogout} />
              </Button_Wrapper>
            </>
          )}

          {!props.data?.fetchUserLoggedIn.name && (
            <>
              <InnerButton
                src="/header/logo/회원가입.png"
                onClick={props.onClickJoin}
              />

              <InnerButton
                src="/header/logo/login.png"
                onClick={props.onClickLogin}
              />
            </>
          )}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
