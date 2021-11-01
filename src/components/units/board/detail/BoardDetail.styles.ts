import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;

  /* border: 1px solid black; */
`;

export const CardWrapper = styled.div`
  /* border: 1px solid black; */
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;

  /* border: 1px solid black; */
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;

  /* border: 1px solid black; */
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* border: 1px solid black; */
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px; // 최소한의 높이 그 이후로는 내용에 따라 증가 늘어날 수 있음*

  /* border: 1px solid green; */
`;

export const Title = styled.h1`
  padding-top: 80px;

  /* border: 1px solid black; */
`;

export const Image = styled.img`
  height: 480px;
  width: 996px;
  background-color: grey;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;

  /* border: 1px solid black; */
`;

export const Youtube = styled.div`
  width: 486px;
  height: 240px;
  margin-left: 255px;
  margin-right: 255px;
  background-color: grey;

  /* border: 1px solid black; */
`;

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* border: 1px solid black; */
`;

export const IconWrapper = styled.div`
  text-align: center;

  /* border: 1px solid black; */
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #ffd600;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;

export const DislikeCount = styled.div`
  color: #828282;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;

  /* border: 1px solid black; */
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
  }
  /* 마우스 올렸을때 노란색으로 나옴 */
`;

export const LinkIcon = styled.img``;

export const LocationIcon = styled.img``;
