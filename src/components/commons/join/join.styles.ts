import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1000px;
  height: 750px;

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

export const Logo = styled.img`
  width: 100px;
  height: fit-content;
`;

export const Input_Wrapper = styled.div`
  /* border: 1px solid black; */
  margin-top: 50px;
`;

export const Input_Title = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  height: 50px;
  width: 500px;
  border-radius: 10px;

  font-size: 20px;

  padding-left: 10px;
`;

interface IProps {
  isActive: boolean;
}

export const Join_Button = styled.button`
  width: 200px;
  height: 50px;

  background-color: ${(props: IProps) => (props.isActive ? "#ffe0b2" : "gray")};
  margin-top: 70px;

  border-radius: 10px;
`;
