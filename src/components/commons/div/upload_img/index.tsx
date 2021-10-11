import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: row;
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

export default function PlaceUpload(props) {
  return (
    <Wrapper>
      <Font>+</Font>
      <Font>Upload</Font>
    </Wrapper>
  );
}
