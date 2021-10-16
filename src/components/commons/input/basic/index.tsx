import styled from "@emotion/styled";

const SubInput = styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  color: #bdbdbd;

  /* margin-bottom: 40px; */
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

// const Error = styled.div`
//   margin-top: 10px;
//   color: red;
// `;

// const Subtitle = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 40px;
//   margin-bottom: 16px;
// `;

export default function MyInput(props: any) {
  return (
    <>
      <SubInput
        // name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        {...props.register}
      ></SubInput>
      {/* <Error>{props.formState}</Error> */}
    </>
  );
}
