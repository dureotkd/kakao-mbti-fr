// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// const converter = require("xml-js");
// const request = require("request");

// const app = express();
// app.use(cors());

// const characters = [
//   {
//     name: "콘",
//     content: "https://kakaofriendsmbti.netlify.app/images/ENFJ.png",
//     mbti: "ENFJ", // for , for of [구글 에서 검색]
//   },
//   {
//     name: "빠냐",
//     content: "https://kakaofriendsmbti.netlify.app/images/ESTJ.png",
//     mbti: "ESTJ",
//   },
//   {
//     name: "앙몬드",
//     content: "https://kakaofriendsmbti.netlify.app/images/INFP.png",
//     mbti: "INFP",
//   },
//   {
//     name: "어피치",
//     content: "https://kakaofriendsmbti.netlify.app/images/ENTP.png",
//     mbti: "ENTP",
//   },
//   {
//     name: "죠르디",
//     content: "https://kakaofriendsmbti.netlify.app/images/ISFJ.png",
//     mbti: "ISFJ",
//   },
// ];

// app.get("/", function (req, res) {
//   res.send("Hello Node.js");
// });

// app.get("/hello", function (req, res) {
//   res.send("안녕하세요");
// });

// app.post("/mbti", function (req, res) {
//   const mbti = req.query.mbti;
//   const mbti2 = mbti.map((item) => {
//     return JSON.parse(item);
//   });

//   let mbtiStr = "";
//   let 추천캐릭터 = "";

//   mbti2.forEach((item) => {
//     const values = Object.values(item);
//     const keys = Object.keys(item);
//     const maxStr = values[0] >= values[1] ? keys[0] : keys[1];
//     mbtiStr += maxStr;
//   });

//   const countArray = [];

//   characters.forEach((item, key) => {
//     let index = 0;
//     let count = 0;

//     for (let x of item.mbti) {
//       // P J
//       if (mbtiStr[index] === x) {
//         count++;
//       }

//       index++;
//     }

//     countArray.push({
//       key: key,
//       count: count,
//     });
//   });

//   let maxValue = 0;
//   let maxKey = null;
//   countArray.forEach((item) => {
//     if (item.count > maxValue) {
//       maxValue = item.count;
//       maxKey = item.key;
//     }
//   });

//   let 최종캐릭터 = characters[maxKey];

//   res.send(최종캐릭터);
// });

// app.get("/test", async function (req, res) {
//   const url = "http://apis.data.go.kr/6300000/pis/parkinglotIF";
//   const serviceKey =
//     "9OMBr6YC9%2BIDhAQTbaj88qvrTay3yXUzW7oU1u3yjSoAGIme26GBP8DK4f3rlgDO2m8OmKe%2BdArxdCYh4lZGQg%3D%3D";

//   request(
//     {
//       url: `http://apis.data.go.kr/6300000/pis/parkinglotIF?serviceKey=${serviceKey}&numOfRows=3&pageNo=1`,
//     },
//     function (error, response, body) {
//       if (error) {
//         throw new Error(error);
//       }

//       const jsonData = converter.xml2json(body);

//       res.send(jsonData);
//     }
//   );

//   // res.send("??");
// });

// app.listen(5000, function () {
//   console.log("Start Node Server!");
// });
