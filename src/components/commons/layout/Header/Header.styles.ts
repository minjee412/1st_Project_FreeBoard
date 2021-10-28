import styled from "@emotion/styled";
import LogoutIcon from "@mui/icons-material/Logout";

export const Wrapper = styled.div`
  height: 100px;
  background-color: #efebe9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
`;

export const InnerWrapper = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  /* border: 1px solid black; */
`;

export const InnerLogo = styled.div`
  width: 80px;
  height: 80px;
  /* font-weight: bold; */
  background-image: url("/header/logo/여행연구소.png");
  background-size: cover;
  /* font-style: italic; */
  /* color: #5729ff; */
  cursor: pointer;
`;

export const Login_Text = styled.span``;

export const Button_Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* border: 1px solid black; */
`;

export const InnerButton = styled.img`
  margin: 10px;
  width: 45px;
  height: 45px;
  cursor: pointer;

  /* border: 1px solid black; */
`;

export const Logout = styled(LogoutIcon)`
  margin: 10px;
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const ChargeBtn = styled.button`
  box-sizing: border-box;
  width: 110px;
  height: 35px;
  margin-left: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  background-color: bisque;

  :hover {
    background-color: lightpink;
  }
`;

export const Charge_Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding: 30px;
`;

export const Charge_Font = styled.div`
  color: grey;
  font-size: 26px;
`;

export const Charge_Img = styled.img`
  width: 85px;
  height: 65px;
  margin-top: 30px;
`;

export const Charge_Font_Sub = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
`;

export const Charge_Rate_Btn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 35px;
  border-radius: 0%;
  background-color: beige;
  border: 1px solid lightgray;

  :hover {
    background-color: lightpink;
  }
`;
