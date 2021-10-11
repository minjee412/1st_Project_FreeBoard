import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailPresenter from "./marketdetail.presenter";
import { FETCH_USED_ITEM } from "./marketdetail.query";

export default function MarketDetailContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <MarketDetailPresenter data={data} />;
}
