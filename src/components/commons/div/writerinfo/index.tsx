import styled from "@emotion/styled";

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;

  /* border: 1px solid black; */
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* border: 1px solid black; */
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export default function WriterInfo(props) {
  return (
    <AvatarWrapper>
      <Avatar src="/avatar.png" />
      <Info>
        <Writer>{props.name}</Writer>
        <CreatedAt>{props.date}</CreatedAt>
      </Info>
    </AvatarWrapper>
  );
}
