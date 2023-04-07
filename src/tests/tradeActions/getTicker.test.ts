import { getTicker } from "../../tradeActions";
import { TickerData, ticker } from "../../models/ticker";

const getTickerSuccess = jest.fn((x: string): TickerData => {
  return { symbol: x, price: 199.9, time: new Date() };
});

test("Should work with parsed ticker interface", async () => {
  let resp = getTickerSuccess("BTCUSDT");
  expect(resp).toEqual([{ symbol: "BTCUSDT", price: 199.9, time: new Date() }]);
});

// test("It will return error because incorrect price provided", async () => {
//   let resp = getTickerSuccess(123);
//   expect(resp).toThrow(TypeError);
// });
