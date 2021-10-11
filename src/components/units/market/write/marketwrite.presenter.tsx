import MyInput from "../../../commons/input/basic";
import MyTextarea from "../../../commons/textarea/01";
import MenuTitle from "../../../commons/div/maintitle";
import {
  Button_Wrapper,
  DetailPlace,
  Menu_Wrapper,
  PlaceWrapper,
  TradePlaceWrapper,
  Wrapper,
  Row,
} from "./marketwrite.styles";
import TradePlace from "../../../commons/div/place_img";
import GPS01 from "../../../commons/input/gps";
import Address from "../../../commons/input/address";
import Subtitle from "../../../commons/font_div/16px_black";
import PlaceUpload from "../../../commons/div/upload_img";
import Radio01 from "../../../commons/input/radio";
import BasicButton from "../../../commons/button/basic";
import { withAuth } from "../../../commons/withAuth";
import ErrorMsg from "../../../commons/errormsg/01";

const MarketWritePresenter = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Wrapper>
        <MenuTitle name="상품 등록 하기" />
        <Row>
          <Subtitle name="상품명" />
          <MyInput
            type="text"
            placeholder="상품명을 작성해주세요."
            register={props.register("name")}
          />
          <ErrorMsg formState={props.formState.errors.name?.message}></ErrorMsg>
        </Row>

        <Row>
          <Subtitle name="한줄요약" />
          <MyInput
            type="text"
            placeholder="상품명을 작성해주세요."
            register={props.register("remarks")}
          />
          <ErrorMsg
            formState={props.formState.errors.remarks?.message}
          ></ErrorMsg>
        </Row>

        <Row>
          <Subtitle name="상품설명" />
          <MyTextarea
            placeholder="상품을 설명해주세요."
            register={props.register("contents")}
          />
          <ErrorMsg
            formState={props.formState.errors.contents?.message}
          ></ErrorMsg>
        </Row>

        <Row>
          <Subtitle name="판매가격" />
          <MyInput
            type="text"
            placeholder="판매가격을 입력해주세요."
            register={props.register("price")}
          />
          <ErrorMsg
            formState={props.formState.errors.price?.message}
          ></ErrorMsg>
        </Row>

        <Row>
          <Subtitle name="태그입력" />
          <MyInput
            type="text"
            // {...props.register("tags")}
            placeholder="#태그 #태그 #태그"
          />
        </Row>

        <PlaceWrapper>
          <TradePlaceWrapper>
            <Subtitle name="거래위치" />
            <TradePlace />
          </TradePlaceWrapper>
          <DetailPlace>
            <span
              style={{ width: "272px", height: "92px", marginBottom: "40px" }}
            >
              <Subtitle name="GPS" />
              <GPS01
                type="text"
                placeholder="위도(LAT)"
                placeholder1="경도(LNG)"
              />
            </span>
            <span
              style={{
                width: "100%",
                height: "160px",
              }}
            >
              <Subtitle name="주소" />
              <Address type="text" />
            </span>
          </DetailPlace>
        </PlaceWrapper>

        <Menu_Wrapper>
          <Subtitle name="사진첨부" />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlaceUpload />
            <PlaceUpload />
            <PlaceUpload />
          </div>
        </Menu_Wrapper>

        <Menu_Wrapper>
          <Subtitle name="메인 사진 설정" />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Radio01 name="사진1" />
            <Radio01 name="사진2" />
          </div>
        </Menu_Wrapper>

        <Button_Wrapper>
          <BasicButton
            type="submit"
            name="등록하기"
            isValid={props.formState.isValid}
          />
        </Button_Wrapper>
      </Wrapper>
    </form>
  );
};
export default withAuth(MarketWritePresenter);
