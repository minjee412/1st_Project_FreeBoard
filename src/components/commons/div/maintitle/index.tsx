import styled from "@emotion/styled";

const TopTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
`;

export default function MenuTitle(props) {
  return <TopTitle>{props.name}</TopTitle>;
}
