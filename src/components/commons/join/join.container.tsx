import { useMutation } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import JoinPagePresenter from "./join.presenter";
import { CREATE_USER } from "./join.query";

export default function JoinPageContainer() {
  const [myEmail, setMyEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

  function onChangeEmail(event: any) {
    setMyEmail(event.target.value);

    if (event.target.value !== "" && myName !== "" && myPassword !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeName(event: any) {
    setMyName(event.target.value);
    if (myEmail !== "" && event.target.value !== "" && myPassword !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event: any) {
    setMyPassword(event.target.value);
    if (myEmail !== "" && myName !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  async function onClickJoin() {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      router.push(`/login`);
      console.log(result.data.createUser._id);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <JoinPagePresenter
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onClickJoin={onClickJoin}
      isActive={isActive}
    />
  );
}
