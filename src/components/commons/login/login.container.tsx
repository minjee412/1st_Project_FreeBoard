import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginPagePresenter from "./login.presenter";
import { LOGIN_USER } from "./login.query";

export default function LoginPageContainer() {
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
      await loginUser({
        // const result = await loginUser({
        variables: {
          password: password,
          email: email,
        },
      });
      router.push(`/boards/`);
      // router.push(`/boards/${result.data.loginUser.accessToken}`);
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
