import styled from "@emotion/styled";

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;

  /* border: 1px solid black; */
`;

export default function Subtitle(props) {
  return <SubTitle>{props.name}</SubTitle>;
}
