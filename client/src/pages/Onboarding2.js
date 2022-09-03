import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onboarding2() {
  return (
    <div className="main-app">
      <ProgressBar step={2} />
      <Question imageUrl="https://kakaofriendsmbti.netlify.app/images/01-01.png" />
      <Answer text="당연하지! 어디서 할지 고민 중이야!" />
      <Answer text="그냥 맛있는거 먹으러 갈까 생각 중이야!" />
    </div>
  );
}

export default Onboarding2;
