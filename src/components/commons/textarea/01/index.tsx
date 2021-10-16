import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";

// import ReactQuill from "react-quill"; // 프론트엔드 서버에서 그릴 때, document가 없어서 문제가 됨

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const SubTitle = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 40px;
// `;

export const TextArea = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  margin-top: 10px;
  margin-bottom: 40px;
`;
export default function MyTextarea(props: any) {
  function onChangeMyEditor(value: any) {
    console.log(value);
  }

  return (
    <>
      <TextArea
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        {...props.register}
        onChange={onChangeMyEditor}
      ></TextArea>
    </>
  );
}
