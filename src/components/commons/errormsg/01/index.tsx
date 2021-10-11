import styled from "@emotion/styled";

const Error = styled.div`
  margin-top: 10px;
  color: red;
`;

export default function ErrorMsg(props: any) {
  return <Error>{props.formState}</Error>;
}
