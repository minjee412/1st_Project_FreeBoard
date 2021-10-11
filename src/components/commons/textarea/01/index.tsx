import styled from "@emotion/styled";

// const SubTitle = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 40px;
// `;

const TextArea = styled.textarea`
  width: 100%;
  height: 320px;
  font-size: 16px;
  color: #bdbdbd;
  margin-top: 16px;
  /* margin-bottom: 40px; */
  padding-top: 14px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export default function MyTextarea(props) {
  return (
    <>
      {/* <SubTitle>{props.name}</SubTitle> */}
      <TextArea placeholder={props.placeholder} {...props.register}></TextArea>
    </>
  );
}
