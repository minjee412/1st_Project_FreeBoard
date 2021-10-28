import {
  useMutation, //useQuery
} from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCommentUI from "./MarketComment_presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS, // commentlist만들고 나서, commentquery에서 import하고 이건 지우기
  UPDATE_USED_ITEM_QUESTION,
} from "./MarketComment_query";

export default function ProductCommentWrite(props: any) {
  const router = useRouter();

  //////////////commentlist만들고 나서 지우기 ////////////////////
  // const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
  //   variables: { useditemId: router.query.useditemId },
  // });
  ////////////////////////////////////////////////////////////

  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  function onChangeCommentContents(event: any) {
    setContents(event.target.value);
  }

  async function onClickQuestion() {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      alert("등록 되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onClickUpdate(event: any) {
    // useEffect(() => {
    //   setContents(props.el.contents);
    // });

    updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents,
        },
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    props.setIsEdit(false);
  }

  return (
    <ProductCommentUI
      onChangeCommentContents={onChangeCommentContents}
      onClickQuestion={onClickQuestion}
      contents={contents}
      isEdit={props.isEdit}
      setisEdit={props.setIsEdit}
      onClickUpdate={onClickUpdate}
      el={props.el}
    />
  );
}
