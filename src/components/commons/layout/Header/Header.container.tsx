import HeaderUI from "./Header.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
} from "./Header.query";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Header() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { accessToken, setAccessToken } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [rate, setRate] = useState(0);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const router = useRouter();

  function onClicklogo() {
    router.push("/boards");
  }

  function onClickJoin() {
    router.push("/join");
  }

  function onClickLogin() {
    router.push("/login");
  }

  function onClickLogout() {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    setAccessToken(" ");
  }

  function onClickCharge() {
    setIsOpen(true);
  }

  function onOk() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 충전하기",
        amount: rate,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      function (rsp: any) {
        console.log(rsp);
        // callback
        if (rsp.success) {
          createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          // ...,
          // 결제 성공 시 로직,
          // ...
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );

    setIsOpen(false);
  }

  function onCancel() {
    setIsOpen(false);
  }

  function handleChange(value: any) {
    setRate(value);
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <HeaderUI
        onClicklogo={onClicklogo}
        onClickJoin={onClickJoin}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
        data={data}
        onClickCharge={onClickCharge}
        isOpen={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        handleChange={handleChange}
      />
    </>
  );
}
