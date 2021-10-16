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
  NonImage,
} from "./market.styles";

import InfiniteScroll from "react-infinite-scroller";
import { withAuth } from "../../../commons/withAuth";
import TodayProduct from "./basket";

const MarketPresenter = (props: any) => {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      <Wrapper>
        <Table_Wrapper>
          <TableTop />
          {props.data?.fetchUseditems.map((el: any) => (
            <Row key={el._id} id={el._id} onClick={props.onClickRow(el)}>
              {el.images[0] ? (
                <ColumnHeaderImage
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <NonImage></NonImage>
              )}
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
          <TopPage onClick={props.onClickRegProduct}>등록하기</TopPage>
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            오늘 본 상품
          </div>
          <TodayProduct></TodayProduct>
          <TopPage onClick={props.onClickTop}>
            <MyOutlined />
            <span>처음으로</span>
          </TopPage>
        </Checked_Item_Wrapper>
      </Wrapper>
    </InfiniteScroll>
  );
};

export default withAuth(MarketPresenter);
