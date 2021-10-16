import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Button = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: any) => (props.isValid ? "pink" : "grey")};
  border: none;
  font-size: 16px;
  color: #4f4f4f;
  cursor: pointer;

  :hover {
    background-color: beige;
  }
`;

export default function BasicButton(props: any) {
  const router = useRouter();

  function onClickMenu(event: any) {
    router.push(event.target.id);
  }

  return (
    <Button
      type={props.type}
      isValid={props.isValid}
      id={props.id}
      onClick={onClickMenu}
    >
      {props.name}
    </Button>
  );
}
