import styled from "@emotion/styled";

const Grey = styled.span`
  color: #bdbdbd;
  font-size: 18px;
`;

export default function Grey18Font(props) {
  return <Grey>{props.name}</Grey>;
}
