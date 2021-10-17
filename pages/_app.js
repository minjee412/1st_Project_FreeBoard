import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import List from "../src/components/commons";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // localStorage.clear();
    // >> 토큰 만료 해결 방법
    // >> chrome개발자 도구 >> Application >> Local Storage >> accessToken 삭제

    const accessToken = localStorage.getItem("accessToken") || "";
    // localStorage.getItem("accessToken") 있으면 저장
    // 없으면 ""
    setAccessToken(accessToken);
  }, [accessToken]);

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` }, // 템플릿 리터널
    // => 프론트엔드에서 로그인 해서 받은 accessToken으로
    //    http header에 authorization에 bearer 타입을 첨부해서 보냈습니다.
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <List>
          <Component {...pageProps} />
        </List>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
