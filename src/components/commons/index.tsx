import styled from "@emotion/styled";
import Header from "./layout/Header/Header.container";
import Banner from "./layout/Banner/Banner.container";
import Navi from "./layout/Menu/Menu.container";
import { useRouter } from "next/router";
import Landing from "./layout/Landing_Page/Landing.container";

const Wrapper = styled.div`
  width: auto;
  margin: 0;
  /* border: 1px solid black; */
`;

const Body = styled.div`
  /* height: 500px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid black; */
`;
const HIDDEN_WRAPPER = ["/Landing"];

export default function List(props: any) {
  const router = useRouter();
  const isHiddenWrapper = HIDDEN_WRAPPER.includes(router.pathname);

  return (
    <>
      {(isHiddenWrapper && <Landing />) || (
        <Wrapper>
          <Header />
          <Banner />
          <Navi />
          <Body>{props.children}</Body>
        </Wrapper>
      )}
    </>
  );
}
