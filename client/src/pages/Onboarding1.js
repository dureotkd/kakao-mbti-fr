import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onboarding1() {
  return (
    <div className="main-app">
      <ProgressBar step={1} />
      <Question imageUrl="https://kakaofriendsmbti.netlify.app/images/01-01.png" />
      <Answer text="당연하지! 어디서 할지 고민 중이야!" value="E" />
      <Answer text="집에서 맛있는거 먹을까 생각중이야!" value="I" />
    </div>
  );
}

export default Onboarding1;
