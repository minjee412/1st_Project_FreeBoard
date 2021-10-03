import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import BoardCommentWrite from "../write/BoardCommnetWrite.container";

import {
  Avatar,
  Contents,
  DateString,
  DeleteIcon,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  OptionWrapper,
  PasswordInput,
  Star,
  UpdateIcon,
  Writer,
  WriterWrapper,
} from "./BoardCommentList.styles";

export default function CommentListItemUI(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMypassword] = useState("");

  const [deleteBoardCommnet] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onChangeDeletePassword(event: any) {
    setMypassword(event.target.value);
  }

  async function onClickDelete() {
    try {
      await deleteBoardCommnet({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  function onClickCancel() {
    setIsOpenDeleteModal(false);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={onClickCancel}>
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/avatar.png" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.el?.writer}</Writer>
                <Star value={props.el?.rating} disabled />
              </WriterWrapper>
              <Contents>{props.el?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon
                src="/boardcomment/list/option_update_icon.png"
                onClick={onClickUpdate}
              />
              <DeleteIcon
                src="/boardcomment/list/option_delete_icon.png"
                onClick={onClickOpenDeleteModal}
              />
            </OptionWrapper>
          </FlexWrapper>
          <DateString>{props.el?.createdAt}</DateString>
        </ItemWrapper>
      )}

      {isEdit && (
        <BoardCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit} // 얘를 commentWritecontainer로 안 보내주면 수정되도 수정 창이 꺼지지 않는다.
          el={props.el} // defaultvalue 역할을 한다.
        />
      )}
    </>
  );
}
