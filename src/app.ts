import {
  getTicker,
  getKlines,
  getRecentTrades,
  getOrderBook,
} from "./tradeActions/index";
import sendNewOrder from "./tradeActions/sendNewOrder";
import getCurrentPositions from "./tradeActions/getCurrentPositions";
import cancelAllOpenOrders from "./tradeActions/cancelAllOpenOrders";

import * as dotenv from "dotenv";

import { exit } from "process";
let tradeSymbol = "BTCUSDT"; /// This is to be deleted. Just so that it is easier to test
let price = 20000;

async function main() {
  dotenv.config();
  console.log(
    "Welcome to the Binance bot \n We provide Orders, recent trades, k-lines and prices. "
  );
  try {
    let trades = await getRecentTrades(tradeSymbol);
    let klines = await getKlines(tradeSymbol);
    let orderBook = await getOrderBook(tradeSymbol);
    let ticker = await getTicker(tradeSymbol);

    // let newOrder = await sendNewOrder(
    //   tradeSymbol,
    //   price,
    //   "BUY",
    //   "GTC",
    //   "LIMIT",
    //   0.001
    // );
    // console.log(newOrder);

    // let currentPositions = await getCurrentPositions(tradeSymbol);
    // console.log("---- ----------    currentPositions   ------ -------- ");
    // console.log(currentPositions);

    let cancelledopenOrders = await cancelAllOpenOrders(tradeSymbol);
    console.log("-----------  cancelledopenOrders   -------------");
    console.log(cancelledopenOrders);
  } catch (e) {
    console.log("Here in APP we catched an error");
    console.log(e);
  }

  //     ////   All below is the logs /////// to be deleted
  // console.log("--------    ******   ---------   trades   ------  ******* ----");
  // console.log(trades);
  // console.log("----------  *******  -------  orderBook ------  *******  -----");
  // console.log(orderBook);
  // console.log("---------- *******  ------  klines ------------- *******  ----");
  // console.log(klines);
  // console.log("---------  ******  -------  ticker ----------  *******  ------");
  // console.log(ticker);
  //     ///////////////////////////
  // });
}

(async () => {
  await main();
})();
