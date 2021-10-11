import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  display: flex;
  flex-direction: column;

  margin: 82px 0px;
  padding: 0px 204px 80px 204px;

  border-bottom: 1px solid #bdbdbd;
`;

export const PartWrapperRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 22px;

  border-bottom: 1px solid #bdbdbd;
  /* border: 1px solid black; */
`;

export const PartWrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 40px;

  border-bottom: 1px solid #bdbdbd;
  /* border: 1px solid black; */
`;

export const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Image30x28 = styled.img`
  width: 30px;
  height: 28px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* border: 1px solid black; */
`;

export const LikeWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid green; */
`;

export const Carousel = styled.div`
  width: 504px;
  height: 482px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  border: 1px solid black;
`;

export const Contents = styled.div`
  width: 792px;
  height: 108px;
  margin-top: 80px;
  font-size: 18px;
  border: 1px solid pink;
`;

export const Tags = styled.div`
  font-size: 16px;
  color: #bdbdbd;
  margin-top: 40px;

  border: 1px solid black;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
  margin-top: 80px;
  margin-bottom: 40px;
  border: 1px solid black;
`;

export const Btn_Wrapper = styled.span`
  width: 382px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 80px;
  margin-left: 220px;
`;
