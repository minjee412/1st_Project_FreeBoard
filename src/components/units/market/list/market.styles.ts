import styled from "@emotion/styled";
import { UpOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export const MyOutlined = styled(UpOutlined)``;
export const Cart = styled(ShoppingCartOutlined)``;

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  margin-top: 80px;
  margin-left: 360px;
  margin-right: 118px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* border: 1px solid black; */
`;

export const Table_Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 46px;

  width: 90%;

  /* border: 1px solid red; */
`;

export const TableTop = styled.div`
  width: 100%;
  border-top: 2px solid gray;
  margin-top: 20px;

  /* border: 1px solid green; */
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  align-items: center;

  :hover {
    background-color: beige;
  }
`;

export const ColumnHeaderImage = styled.img`
  width: 160px;
  height: 160px;
  text-align: center;

  margin-right: 40px;
`;

export const NonImage = styled.img`
  width: 200px;
  height: 160px;
  text-align: center;
  background-color: grey;
  margin-right: 40px;
`;

export const ColumnHeaderTitle = styled.div`
  height: 100%;
  width: 70%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;

  /* border: 1px solid black; */

  /* :hover {
    background-color: #bdb9b7;
    color: #6a4f4b;
  } */
`;

export const ProductTitle = styled.span`
  display: flex;
  height: 36px;
  align-items: center;
  font-size: 24px;
  margin: 0px;

  /* border: 1px solid black; */
`;
export const ProductDetail = styled.span`
  display: flex;
  height: 24px;
  align-items: center;
  font-size: 16px;
  color: #4f4f4f;
`;
export const ProductTag = styled.span`
  display: flex;
  font-size: 16px;
  align-items: center;
  height: 24px;
  color: #bdbdbd;
  margin: 0px;
`;

export const Avartar = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 6px;
`;

export const Seller = styled.span`
  font-size: 16px;

  margin-right: 22px;
`;

export const ColumnHeaderPrice = styled.div`
  width: 30%;
  text-align: right;
  margin-top: 28px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  /* border: 1px solid black; */
`;

export const Price = styled.span`
  font-size: 24px;
  margin-left: 11px;

  /* border: 1px solid black; */
`;

export const Checked_Item_Wrapper = styled.div`
  width: 196px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 10%;
  right: 3%;

  border: 1px solid #bdbdbd;
`;

export const TopPage = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightseagreen;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

export const TodayProductWrapper = styled.div`
  width: 100%;
  height: 190px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border: 1px dotted #bdbdbd;
`;

export const TodayProductLike = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: right;
  align-items: center;

  /* border: 1px solid blue; */
`;

export const Heart = styled.img`
  width: 15px;
  height: 14px;
  margin-right: 6px;

  /* border: 1px solid black; */
`;

export const ProductImg = styled.img`
  width: 60px;
  height: 60px;

  margin-bottom: 12px;

  /* border: 1px solid blue; */
`;

export const EmptyImage = styled.img`
  width: 60px;
  height: 60px;

  margin-bottom: 12px;
  background-color: grey;
  /* border: 1px solid blue; */
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: fit-content;

  /* border: 1px solid bla  ck; */
`;

export const SideProductTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  font-weight: bold;

  /* border: 1px solid black; */
`;

export const ProductRemarks = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-style: italic;
  color: blue;
`;

export const SideProductTag = styled.div`
  width: 100%;
  height: 20px;
  font-weight: 500;
  font-size: 12px;
  color: red;

  /* border: 1px solid black; */
`;
