import styled from "@emotion/styled";

// const Subtitle = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 40px;
//   margin-bottom: 16px;
// `;

const PlaceImg = styled.img`
  background-color: lightgrey;

  width: 100%;
  height: 100%;
`;

export default function TradePlace(props) {
  return (
    <>
      {/* <Subtitle>{props.name}</Subtitle> */}
      <PlaceImg></PlaceImg>
    </>
  );
}
