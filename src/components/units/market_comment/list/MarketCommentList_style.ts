import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CommentMap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 1200px;
  /* border-bottom: 1px solid #bdbdbd; */
  margin-top: 40px;
`;
export const CommentProfileImageBox = styled.div`
  display: flex;
  /* align-items: center; */
  width: 5%;
`;

export const CommentProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const Row = styled.div`
  width: 1200px;
  display: flex;
`;
export const CommentEditButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CommentDeleteButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const MapBox = styled.div`
  width: 90%;
  /* height: 130px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const MapWriteRating = styled.div`
  display: flex;
`;

export const MapWriter = styled.div`
  font-size: 16px;
  font-weight: 500;
  /* line-height: 23.68px; */
`;
export const MapRating = styled.div`
  margin-left: 18px;
`;

export const MapContents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const MapDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
  margin-left: 60px;
`;

export const EditBox = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  width: 8%;
`;
