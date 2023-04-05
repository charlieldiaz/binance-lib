import cancelAllOpenOrders from "../../tradeActions/cancelAllOpenOrders";
import { getTicker } from "../../tradeActions";
import { TickerData, ticker } from "../../models/ticker";
import * as dotenv from "dotenv";
// function sum(a: number, b: number) {
//   return a + b;
// }

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const getTickerSuccess = jest.fn(async (x: string): Promise<TickerData> => {
//   return { symbol: x, price: 199.9, time: new Date() };
// });

// test("Should work with parsed ticker interface", async () => {
//   let resp = await getTickerSuccess("BTCUSDT");
//   expect(resp).toEqual([{ symbol: "BTCUSDT", price: 199.9, time: new Date() }]);
// });
const testTime = 1680671406;
const correctData = {
  symbol: "BTCUSDT",
  price: 123.123,
  time: new Date(testTime),
};

test("Should work with parsed ticker interface", async () => {
  let resp = await ticker({
    symbol: "BTCUSDT",
    price: "123.123",
    time: testTime,
  });
  expect(resp).toEqual(correctData);
});
