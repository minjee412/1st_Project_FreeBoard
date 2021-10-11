import styled from "@emotion/styled";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 272px;
  height: 92px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  /* border: 1px solid black; */
`;

const Sub_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// const Subtitle = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 40px;
//   margin-bottom: 16px;
// `;

const LATandLNG = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 108px;
  height: 52px;

  border: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
`;

const LocationImg = styled.img`
  width: 14px;
  height: 20px;
`;

export default function GPS01(props) {
  return (
    <Wrapper>
      {/* <Subtitle>{props.name}</Subtitle> */}
      <Sub_Wrapper>
        <LATandLNG>{props.placeholder}</LATandLNG>
        <LocationImg src="/board/detail/location.png" />
        <LATandLNG>{props.placeholder1}</LATandLNG>
      </Sub_Wrapper>
    </Wrapper>
  );
}
