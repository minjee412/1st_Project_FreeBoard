import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;

  /* border: 1px solid black; */
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
`;

export const Top = styled.div`
  width: 1200px;
  height: 257px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const BestContents = styled.div`
  width: 282px;
  height: 257px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  /* margin-top: 40px; */

  /* background-color: red; */
`;

export const Img = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 120px;

  /* border: 1px solid black; */
`;

export const EmptyImg = styled.div`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 120px;
  background-color: #bdbdbd;
`;

export const Info = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  /* border: 1px solid black; */
`;

export const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 500px;

  /* border: 1px solid black; */
`;

export const InfoBottom = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  /* border: 1px solid black; */
`;

export const InfoBottomLeft = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* border: 1px solid black; */
`;

export const Profile = styled.div`
  display: flex;

  /* border: 1px solid black; */
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProfileName = styled.div`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 400;
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #828282;
`;

export const Like = styled.img`
  width: 20px;
  height: 18px;
  margin-bottom: 10px;
`;

export const InfoBottomRight = styled.div`
  width: 27px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid black; */
`;

export const Search_Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* border: 1px solid blue; */
`;

export const Search_Input = styled.input`
  height: 52px;
  width: 776px;

  padding-left: 48px;
`;

export const Search_Button = styled.button`
  width: 94px;
  height: 52px;
  border-radius: 10px;
  background-color: black;
  color: white;
`;

interface IProps {
  isMatched: boolean;
}

export const Myword = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;

  /* border: 1px solid green; */
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle1 = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;

  :hover {
    background-color: #bdb9b7;
    color: #6a4f4b;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

export const Pagenation = styled.div`
  margin-left: 350px;
  height: 52px;
  font-size: 16px;
`;

export const Page = styled.span`
  margin: 0 10px;
  cursor: pointer;

  :hover {
    color: brown;
  }
`;
