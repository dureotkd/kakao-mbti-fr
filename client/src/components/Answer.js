import React from "react";
import { StoreContext } from "../App";

function Answer(props) {
  const { setDispatchType } = React.useContext(StoreContext);

  return (
    <button
      className="btn"
      onClick={() => {
        setDispatchType({
          code: "답변",
          params: {
            mbti: props.value,
          },
        });
      }}
    >
      {props.text}
    </button>
  );
}

export default Answer;
