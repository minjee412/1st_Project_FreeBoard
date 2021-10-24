import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import LoginPagePresenter from "./login.presenter";
import { LOGIN_USER } from "./login.query";
import { GlobalContext } from "../../../../pages/_app";

export default function LoginPageContainer(props: any) {
  const { setAccessToken } = useContext(GlobalContext);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeEmail(event: any) {
    setEmail(event.target.value);

    if (event.target.value !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event: any) {
    setpassword(event.target.value);

    if (email !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        // const result = await loginUser({
        variables: {
          password: password,
          email: email,
        },
      });

      // router.push(`/boards/${result.data.loginUser.accessToken}`);
      console.log(result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken);
      router.push("/boards/");
      localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
      localStorage.setItem("refreshToken", "true");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <LoginPagePresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      isActive={isActive}
      onClickLogin={onClickLogin}
    />
  );
}
