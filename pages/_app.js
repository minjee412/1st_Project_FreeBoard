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

// 리프레시 토큰
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // localStorage.clear();
    // >> 토큰 만료 해결 방법
    // >> chrome개발자 도구 >> Application >> Local Storage >> accessToken 삭제

    // const accessToken = localStorage.getItem("accessToken") || "";
    // // localStorage.getItem("accessToken") 있으면 저장 , 없으면 ""
    // setAccessToken(accessToken);

    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  // 리프레시토큰 에러 링크
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // graphQlErrors : graphQl 관련 에러 , operation : 내가 지금 방금 한 쿼리를 하다 실패 했는지, forward : 내가 실패한 쿼리를 후에 다시 날리는데 사용 된다.

    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 에러문에서 에러를 하나씩 뽑아서 반복 한다.

        if (err.extensions?.code === "UNAUTHENTICATED") {
          //setContext : header 부분 관련 해서 관리 해주는 기능
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              // operation에서 기존에 가지고 있던 headers 소환
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` }, // 템플릿 리터널
    // => 프론트엔드에서 로그인 해서 받은 accessToken으로
    //    http header에 authorization에 bearer 타입을 첨부해서 보냈습니다.

    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서 중요 !! 에러링크 먼저 ! 그 다음 업로드 링크
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
