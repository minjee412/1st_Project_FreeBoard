import styled from '@emotion/styled';
import { Rate } from "antd";


export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;

  /* border : 1px solid green; */
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;

  /* border: 1px solid black; */
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;

  /* border: 1px solid blue; */
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* border: 1px solid black; */
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;

  /* border: 1px solid black; */
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const Contents = styled.div`
    /* border: 1px solid red; */
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  /* border: 1px solid blueviolet; */
`;

export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;

  /* border: 1px solid purple; */
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
