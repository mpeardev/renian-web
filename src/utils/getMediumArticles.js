// import { useEffect, useState } from "react";

// export const getMediumArticles = () => {
//   const [articles, setArticles] = useState();

//   useEffect(() => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const requestOptions = {
//       method: "get",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch(
//       "https://v1.nocodeapi.com/mpeardev/medium/UwKSEdWUYheCIOgA",
//       requestOptions
//     )
//       .then((response) => response.text())
//       .then((result) => {
//         const rsp = JSON.parse(result);
//         setArticles(rsp);
//         console.log(rsp);
//       })
//       .catch((error) => console.log("error", error));
//   }, []);

//   return { articles };
// };
