// import { withAuth } from "../../withAuth";
import {
  Button_Wrapper,
  ChargeBtn,
  Charge_Font,
  Charge_Font_Sub,
  Charge_Img,
  Charge_Rate_Btn,
  Charge_Wrapper,
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Logout,
  Wrapper,
} from "./Header.styles";
import { HeartTwoTone } from "@ant-design/icons";
import { Modal } from "antd";

export default function HeaderUI(props: any) {
  return (
    <Wrapper>
      {props.isOpen && (
        <Modal visible={true} onOk={props.onOk} onCancel={props.onCancel}>
          <Charge_Wrapper>
            <Charge_Font>포인트 충전하기</Charge_Font>
            <Charge_Img src="/charge.png" />
            <Charge_Font_Sub>충전하실 금액을 선택 해주세요 !!</Charge_Font_Sub>
            <Charge_Rate_Btn>1000원</Charge_Rate_Btn>
            <Charge_Rate_Btn>10000원</Charge_Rate_Btn>
            <Charge_Rate_Btn>100000원</Charge_Rate_Btn>
          </Charge_Wrapper>
        </Modal>
      )}
      <InnerWrapper>
        <InnerLogo onClick={props.onClicklogo}></InnerLogo>
        <div>
          {props.data?.fetchUserLoggedIn.name && (
            <>
              <Button_Wrapper>
                <span style={{ color: "blue" }}>
                  ⭐️ {props.data?.fetchUserLoggedIn.name}님 환영 합니다. ⭐️
                </span>
                <span style={{ marginLeft: "40px" }}>잔여 포인트:</span>
                <span style={{ marginLeft: "10px", color: "red" }}>
                  {props.data?.fetchUserLoggedIn.userPoint.amount} P
                </span>
                <ChargeBtn onClick={props.onClickCharge}>
                  <HeartTwoTone twoToneColor="#eb2f96" />
                  충전하기
                </ChargeBtn>
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
