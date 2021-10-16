import styled from "@emotion/styled";

const TodayProductWrapper = styled.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border: 1px solid green;
`;

const TodayProductLike = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: right;
  align-items: center;

  border: 1px solid blue;
`;

const Heart = styled.img`
  width: 15px;
  height: 14px;
  margin-right: 6px;
`;

const ProductImg = styled.img`
  width: 60px;
  height: 60px;

  margin-bottom: 12px;

  border: 1px solid blue;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: fit-content;

  border: 1px solid black;
`;

const ProductTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
`;

const ProductRemarks = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`;

const ProductPrice = styled.div`
  font-size: 16px;
`;

const ProductTag = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #bdbdbd;
`;

export default function TodayProduct(props: any) {
  return (
    <TodayProductWrapper>
      <TodayProductLike>
        <Heart src="/하트.png" />
        <span>20</span>
      </TodayProductLike>
      <ProductImg></ProductImg>
      <InfoWrapper>
        <div>
          <ProductTitle>asdf</ProductTitle>
          <ProductRemarks>asdfasd</ProductRemarks>
        </div>
        <div style={{ marginTop: "4px", marginBottom: "8px" }}>
          <ProductPrice>asdf원</ProductPrice>
        </div>
        <ProductTag>asdasdf</ProductTag>
      </InfoWrapper>
    </TodayProductWrapper>
  );
}
