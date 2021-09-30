import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function CommentList(props: any) {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  function onLoadMore() {
    if (!data) return; // 데이터가 없을때는 종료

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  }

  return <CommentListUI data={data} onLoadMore={onLoadMore} />;
}
