import {
  Avartar,
  Checked_Item_Wrapper,
  ColumnHeaderImage,
  ColumnHeaderPrice,
  ColumnHeaderTitle,
  Price,
  ProductDetail,
  ProductTag,
  ProductTitle,
  Row,
  Seller,
  TableTop,
  Table_Wrapper,
  TopPage,
  Wrapper,
  MyOutlined,
} from "./market.styles";

import InfiniteScroll from "react-infinite-scroller";
import { withAuth } from "../../../commons/withAuth";

const MarketPresenter = (props: any) => {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      <Wrapper>
        <Table_Wrapper>
          <TableTop />
          {props.data?.fetchUseditems.map((el: any) => (
            <Row key={el._id} id={el._id} onClick={props.onClickRow}>
              <ColumnHeaderImage src="/market/write/사해바다.jpeg" />
              <ColumnHeaderTitle>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <ProductTitle>{el.name}</ProductTitle>
                  <ProductDetail>{el.remarks}</ProductDetail>
                  <ProductTag>{el.tags}</ProductTag>
                </span>
                <div>
                  <Avartar src="/avatar.png" />
                  <Seller>{el.seller.name}</Seller>
                  <Avartar src="/하트.png" />
                  <Seller>{el.pickedCount}</Seller>
                </div>
              </ColumnHeaderTitle>

              <ColumnHeaderPrice>
                <img src="/화폐단위.png" />
                <Price>{el.price} 원</Price>
              </ColumnHeaderPrice>
            </Row>
          ))}
        </Table_Wrapper>
        <Checked_Item_Wrapper>
          <TopPage onClick={props.onClickTop}>
            <MyOutlined />
            <span>처음으로</span>
          </TopPage>
          <TopPage onClick={props.onClickRegProduct}>등록하기</TopPage>
        </Checked_Item_Wrapper>
      </Wrapper>
    </InfiniteScroll>
  );
};

export default withAuth(MarketPresenter);
