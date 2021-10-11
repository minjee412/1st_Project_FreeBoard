import styled from "@emotion/styled";

const Wrapper = styled.div`
  box-sizing: border-box;
  /* width: 100%; */
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: 40px; */
  /* border: 1px solid black; */
`;

// const Subtitle = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 40px;
// `;

const AddressInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #bdbdbd;

  /* margin-top: 16px; */
`;

export default function Address(props) {
  return (
    <Wrapper>
      {/* <Subtitle>{props.name}</Subtitle> */}
      <AddressInput type={props.type} />
      <AddressInput type={props.type} />
    </Wrapper>
  );
}
