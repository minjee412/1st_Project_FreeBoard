import { useRouter } from "next/router";
import BasicButton from "../../../commons/button/basic";
import WriterInfo from "../../../commons/div/writerinfo";
import Grey18Font from "../../../commons/font_div/18px_lightgrey";
import Black24Font from "../../../commons/font_div/24px_black";
import Black36Font from "../../../commons/font_div/36px_black";
import {
  Btn_Wrapper,
  Carousel,
  Contents,
  Image30x28,
  Img,
  LikeWrapper,
  Map,
  PartWrapperColumn,
  PartWrapperRow,
  Tags,
  TitleWrapper,
  Wrapper,
} from "./marketdetail.styles";
import Dompurify from "dompurify";
import { DeleteOutlined } from "@ant-design/icons";

export default function MarketDetailPresenter(props: any) {
  const router = useRouter();

  return (
    <Wrapper>
      <PartWrapperRow>
        <WriterInfo
          name={props.data?.fetchUseditem.seller.name}
          date={`Date: ${props.data?.fetchUseditem.createdAt.slice(0, 10)}`}
        />
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100px",
          }}
        >
          <Img src="/board/detail/link.png" />
          <Img src="/board/detail/location.png" />
          <DeleteOutlined
            style={{
              fontSize: "22px",
              color: "red",
              fontWeight: "bold",
            }}
            onClick={props.onClickDelete}
          />
        </span>
      </PartWrapperRow>

      <PartWrapperColumn>
        <TitleWrapper>
          <span
            style={{ display: "flex", flexDirection: "column", margin: "8px" }}
          >
            <Grey18Font name={props.data?.fetchUseditem.remarks} />
            <Black24Font name={props.data?.fetchUseditem.name} />
          </span>
          <LikeWrapper>
            <Image30x28 src="/하트.png" onClick={props.onClickLike} />
            <span>{props.data?.fetchUseditem.pickedCount}</span>
          </LikeWrapper>
        </TitleWrapper>
        <TitleWrapper>
          <Black36Font name={`${props.data?.fetchUseditem.price}원`} />
        </TitleWrapper>
        {props.data?.fetchUseditem.images.map((el: any, idx: any) => (
          <Carousel
            key={idx}
            src={`https://storage.googleapis.com/${el}`}
          ></Carousel>
        ))}
        {/* {typeof window !== "undefined" && } 로 쓰는 곳도 있다. */}

        <div style={{ marginTop: "80px" }}>
          <div style={{ marginBottom: "10px", fontSize: "16px" }}>Contents</div>
          {process.browser && (
            <Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></Contents>
          )}
        </div>

        <Tags>
          <span style={{ color: "black", marginBottom: "10px" }}>Tag</span>
          <>
            {props.data?.fetchUseditem.tags[0] === ""
              ? ""
              : `#${props.data?.fetchUseditem.tags[0]}`}

            {props.data?.fetchUseditem.tags[1] === ""
              ? `${props.data?.fetchUseditem.tags[1]}`
              : `#${props.data?.fetchUseditem.tags[1]}`}

            {props.data?.fetchUseditem.tags[2] === ""
              ? ""
              : `# ${props.data?.fetchUseditem.tags[2]}`}
          </>
        </Tags>
      </PartWrapperColumn>

      <PartWrapperColumn>
        <Map id="map">지도</Map>
      </PartWrapperColumn>

      <Btn_Wrapper>
        <BasicButton name="목록으로" id="/market" />
        <BasicButton name="구매하기" />
        {/* <button onClick={props.aaa}>수정하기</button> */}
        <BasicButton
          name="수정하기"
          id={`/market/${router.query.useditemId}/edit`}
        />
      </Btn_Wrapper>
    </Wrapper>
  );
}
