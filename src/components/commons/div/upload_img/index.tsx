// import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
// import { gql } from "@apollo/client";
import { useRef, useState } from "react";
// import { UPLOAD_FILE } from "../../../units/market/write/marketwrite.query";

const Wrapper = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 24px;

  background-color: #bdbdbd;
`;

const Font = styled.span`
  color: #4f4f4f;
  font-size: 16px;
`;

// export const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function PlaceUpload(props: any) {
  const [imageUrl, setImageUrl] = useState("");
  // const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>();

  async function onChangeFile(event: any) {
    const myFile = event.target.files[0];

    if (!myFile) {
      alert("파일이 없습니다.");
      return;
    }
    if (myFile.size > 2000 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한2GB)");
      return;
    }
    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능 합니다 !");
      return;
    }

    // console.log(myFile);

    // try {
    //   const result = await uploadFile({
    //     variables: {
    //       file: myFile,
    //     },
    //   });
    //   console.log(result.data.uploadFile.url);
    //   setImageUrl(result.data.uploadFile.url);
    //   props.setImageFunc(result.data.uploadFile.url, props.index);
    // } catch (error) {
    //   alert("error.message");
    // }

    try {
      const fileReader = await new FileReader();
      fileReader.readAsDataURL(myFile);
      fileReader.onload = (data: any) => {
        setImageUrl(data.target.result);
        console.log(data.target.result);
        // props.setImages(myFile);
        props.setImageFunc(data.uploadFile?.result, props.index);
      };
    } catch (error: any) {
      console.log(error.message);
    }
  }

  function onClickImage() {
    fileRef.current?.click();
  }

  return (
    <>
      {imageUrl ? (
        <img
          // src={`https://storage.googleapis.com/${imageUrl}`}
          src={imageUrl}
          style={{ width: "180px", height: "180px", marginRight: "24px" }}
        />
      ) : (
        <Wrapper onClick={onClickImage}>
          <Font>+</Font>
          <Font>Upload</Font>
        </Wrapper>
      )}
      <input
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
    </>
  );
}
