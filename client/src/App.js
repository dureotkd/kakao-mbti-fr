/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AppIndex from "./AppIndex";
import { parseStr } from "./helper/common-helper";

export const StoreContext = React.createContext({});

/**
 *
 * React Context
 */
function App() {
  const testApi = async () => {
    const url = "https://apis.data.go.kr/6300000/pis/parkinglotIF";
    const serviceKey =
      "9OMBr6YC9+IDhAQTbaj88qvrTay3yXUzW7oU1u3yjSoAGIme26GBP8DK4f3rlgDO2m8OmKe+dArxdCYh4lZGQg==";

    await axios({
      url: url,
      method: "get",
      params: {
        serviceKey: serviceKey,
        numOfRows: 50,
        pageNo: 1,
      },
    })
      .then((response) => {
        const jsonData = parseStr(response.data);
      })
      .catch(() => {
        console.log("에러 !");
      });
  };

  React.useEffect(() => {
    testApi();
  }, []);

  const navigation = useNavigate();

  const [dispatchType, setDispatchType] = React.useState({
    code: "",
    params: null,
  });
  const [mbti, setMbti] = React.useState([
    {
      I: 0, // 내향형 !!
      E: 0, // 외향형
    },
    {
      S: 0, // 현실형
      N: 0, // 이상주의형
    },
    {
      T: 0, // 이성적
      F: 0, // 감성적
    },
    {
      P: 0, // 즉흥형
      J: 0, // 계획형
    },
  ]);

  React.useEffect(() => {
    switch (dispatchType.code) {
      case "답변":
        const clickedMbti = dispatchType.params.mbti;

        const cloneMbti = [...mbti];

        const obj = {
          name: "",
          age: 0,
        };

        const findIndex = cloneMbti.findIndex((value) => {
          return value.hasOwnProperty(clickedMbti);
        });

        cloneMbti[findIndex][clickedMbti]++;
        setMbti(cloneMbti);

        const pathname = window.location.pathname;
        const nextPage = Number(pathname.charAt(pathname.length - 1)) + 1;

        if (nextPage === 6) {
          navigation(`/result`, {
            state: {
              mbti: mbti,
            },
          });
        } else {
          navigation(`/on${nextPage}`);
        }

        break;

      default:
        break;
    }
  }, [dispatchType]);

  return (
    <StoreContext.Provider
      value={{
        setDispatchType: setDispatchType,
      }}
    >
      <AppIndex />
    </StoreContext.Provider>
  );
}

export default App;
