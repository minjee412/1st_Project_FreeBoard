import styled from "@emotion/styled";
// import ReactQuill from "react-quill"; // 프론트 서버에서 그릴 때, document가 없어서 문제가 됨 !!

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 2009px;
  margin-top: 80px;
  padding: 102px 80px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  /* border: 1px solid black; */
`;
export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 40px;

  /* border: 1px solid black; */
`;

export const PlaceWrapper = styled.div`
  width: 100%;
  height: 292px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid black; */

  margin-top: 40px;
`;

export const TradePlaceWrapper = styled.span`
  width: 600px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-right: 24px;

  /* border: 1px solid black; */
`;

export const DetailPlace = styled.span`
  width: 100%;
  height: 292px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  /* border: 1px solid black; */
`;

export const Menu_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;

  /* border: 1px solid black; */
`;

export const Button_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 80px;
`;

export const TextArea = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  margin-top: 10px;
  margin-bottom: 40px;
`;
