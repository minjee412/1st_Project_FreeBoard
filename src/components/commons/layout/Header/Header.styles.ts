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
