import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();

  const sendMbti = () => {
    console.log(state);
  };

  React.useEffect(() => {
    sendMbti();
  }, []);

  return <div>Result</div>;
}

export default Result;
