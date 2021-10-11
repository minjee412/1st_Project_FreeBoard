import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketPresenter from "./market.presenter";
import { FETCH_USED_ITEMS } from "./market.query";

export default function MarketContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: false,
      page: 1,
    },
  });

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  function onClickTop() {
    scrollTo(0, 0);
  }

  function onClickRegProduct() {
    router.push("/market/new_register");
  }

  function onClickRow(event: any) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  return (
    <MarketPresenter
      data={data}
      fetchMore={fetchMore}
      onLoadMore={onLoadMore}
      onClickTop={onClickTop}
      onClickRegProduct={onClickRegProduct}
      onClickRow={onClickRow}
    />
  );
}
