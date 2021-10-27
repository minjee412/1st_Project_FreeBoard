import ProductCommentWrite from "./MarketComment_container";
import {
  CommentButton,
  CommentContents,
  CommentIcon,
  CommentLengthCheckBox,
  CommentTitle,
  CommentWrapper,
  ContentsInputBox,
  Line,
  Wrapper,
} from "./MarketComment_style";

export default function ProductCommentUI(props: any) {
  return (
    <Wrapper>
      <Line />
      <CommentWrapper>
        {!props.isEdit && (
          <CommentTitle>
            <CommentIcon src="/boardcomment/write/pencil.png" />
            <div>문의하기</div>
          </CommentTitle>
        )}

        <ContentsInputBox>
          <CommentContents
            onChange={props.onChangeCommentContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고, 불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
          />
          <CommentLengthCheckBox>
            <div>{props.contents.length}/100</div>
            <CommentButton
              id={props.el?._id}
              onClick={
                props.isEdit ? props.onClickUpdate : props.onClickQuestion
              }
            >
              {props.isEdit ? "수정하기" : "문의하기"}
            </CommentButton>
          </CommentLengthCheckBox>
        </ContentsInputBox>
      </CommentWrapper>
    </Wrapper>
  );
}
