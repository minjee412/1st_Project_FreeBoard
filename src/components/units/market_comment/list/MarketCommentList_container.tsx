import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductCommentListUI from "./MarketCommentList_presenter";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./MarketCommentList_query";

export default function ProductCommentList(props: any) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  function onClickDelete(event: any) {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  }

  return (
    <ProductCommentListUI
      onClickDelete={onClickDelete}
      data={data}
      el={props.el}
    />
  ); // 여기 el은 [useditemId]에서 불러온 el값.
}
