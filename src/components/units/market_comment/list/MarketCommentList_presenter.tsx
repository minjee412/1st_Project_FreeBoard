import {
  CommentEditButton,
  CommentMap,
  CommentProfileImage,
  CommentProfileImageBox,
  EditBox,
  MapBox,
  MapContents,
  MapDate,
  MapWriter,
  MapWriteRating,
  Row,
  Wrapper,
} from "./MarketCommentList_style";

export default function ProductCommentListUI(props: any) {
  return (
    <Wrapper>
      <CommentMap>
        <Row>
          <CommentProfileImageBox>
            <CommentProfileImage src="/avatar.png" />
          </CommentProfileImageBox>

          <MapBox>
            <MapWriteRating>
              <MapWriter>{props.el.user?.name}</MapWriter>
            </MapWriteRating>
            <MapContents>{props.el.contents}</MapContents>
          </MapBox>

          <EditBox>
            <CommentEditButton src="/boardcomment/list/option_update_icon.png" />
            <CommentEditButton
              id={props.el._id}
              src="/boardcomment/list/option_delete_icon.png"
              onClick={props.onClickDelete}
            />
          </EditBox>
        </Row>

        <MapDate>{props.el.createdAt.slice(0, 10)}</MapDate>
      </CommentMap>
    </Wrapper>
  );
}
