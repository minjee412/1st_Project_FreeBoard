import styled from "@emotion/styled";

export const Landing_Wrapper = styled.div`
  box-sizing: border-box;
  background-image: url("/landing/banner.jpg");
  width: 100%;
  min-height: 1200px;
  /* background-color: black; */
  /* border: 1px solid black; */

  display: flex;
  flex-direction: row;
  /* margin: 0; */

  padding-left: 200px;
  padding-top: 300px;
`;

export const Button_Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  /* justify-content: center; */
  /* align-items: center; */

  /* border: 1px solid black */
`;

export const Enter = styled.button`
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 45px;
  border-radius: 10px;
  color: whitesmoke;
  border-style: none;
  cursor: pointer;
`;
