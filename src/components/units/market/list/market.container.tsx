import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MarketPresenter from "./market.presenter";
import { FETCH_USED_ITEMS } from "./market.query";

export default function MarketContainer() {
  const router = useRouter();
  const [isSoldout, setIsSoldout] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: isSoldout,
      page: 1,
    },
  });

  function onClickSoldout() {
    setIsSoldout(true);
  }

  function onClickNotSoldout() {
    setIsSoldout(false);
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItems(items);
  }, []);

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

  const onClickRow = (el: any) => (event: any) => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);

    // console.log("담기", el);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    router.push(`/market/${event.currentTarget.id}`);
  };

  function onClickMoveToTodayView(event: any) {
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
      basketItems={basketItems}
      onClickMoveToTodayView={onClickMoveToTodayView}
      onClickSoldout={onClickSoldout}
      onClickNotSoldout={onClickNotSoldout}
      isSoldout={isSoldout}
    />
  );
}
