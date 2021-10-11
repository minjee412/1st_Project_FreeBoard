import styled from "@emotion/styled";

const Wrapper = styled.span`
  display: flex;
  flex-direction: row;

  margin-right: 24px;
`;

const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Title = styled.span`
  font-size: 16px;
`;

export default function Radio01(props) {
  return (
    <Wrapper>
      <RadioButton name="choice" type="radio"></RadioButton>
      <Title>{props.name}</Title>
    </Wrapper>
  );
}
