import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailContainer from "../../../src/components/units/market/detail/marketdetail.container";
import ProductCommentList from "../../../src/components/units/market_comment/list/MarketCommentList_container";
import ProductCommentWrite from "../../../src/components/units/market_comment/write/MarketComment_container";

// 여기서 query와 map 돌리는 이유 ? boardcommentitems 같은 파일을 따로 안만들려고 !
const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      user {
        name
      }
      contents
      createdAt
    }
  }
`;

export default function MarketDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  return (
    <>
      <MarketDetailContainer />
      <ProductCommentWrite />
      {data?.fetchUseditemQuestions.map((el: any) => (
        <ProductCommentList id={el._id} key={el._id} el={el} />
      ))}
    </>
  );
}
