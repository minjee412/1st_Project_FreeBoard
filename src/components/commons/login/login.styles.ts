import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 600px;

  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  margin-top: 100px;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;

  border-radius: 10px;
  border: 1px dotted black;
`;

interface IProps {
  isActive: boolean;
}

export const Login_Button = styled.button`
  width: 200px;
  height: 50px;

  background-color: ${(props: IProps) => (props.isActive ? "#ffe0b2" : "gray")};
  margin-top: 70px;

  border-radius: 10px;
`;
