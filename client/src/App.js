import React from "react";
import "./App.css";
import AppIndex from "./AppIndex";

/**
 * 1. import : 외부에 있는 모듈(함수나 변수) 가져올떄 사용
 * 2. export : 내부에 있는 모듈을 외부로 전달해줄떄 사용
 *
 * React router dom : 리액트 내에서 페이지 이동 도와주는 라이브러리
 *
 */
function App() {
  return <AppIndex />;
}

export default App;
