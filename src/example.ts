// const util = require("./util");
// const tradeActions = require("./tradeActions");
// const axios = require("axios");

// require("dotenv").config();
// const secretKey = process.env.SECRET_KEY;
// const apiKey = process.env.API_KEY;

// async function getOpenOrders(symbol: string) {
//   const endPoint = "openOrders";
//   const params = util.sortParamsAlphabeticallyOmitEmptySignV({
//     symbol,
//     timestamp: Date.now(),
//   });
//   const signature = util.getSignature(params, secretKey);
//   let url = `${tradeActions.TEST_NET_BASE_URL}${endPoint}?${params}&signature=${signature}`;
//   const requestOptions = {
//     headers: { "X-MBX-APIKEY": apiKey },
//     url,
//     method: "GET",
//   };
//   let response;
//   try {
//     response = await axios(requestOptions);
//   } catch (e) {
//     console.log(e);
//   }
//   return response.data;
// }

// export default getOpenOrders;

// // "test": "echo \"Error: no test specified\" && exit 1",
