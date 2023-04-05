import fetchData from "./fetchData";

import { ticker, TickerData } from "../models/ticker";
import parseAllTrades from "../models/trades";
import parseAllKlines from "../models/kLines";
import parseAllOrderBook from "../models/orderBook";

export async function getKlines(symbol: string, interval = "1") {
  const endPoint = "v1/klines";
  const uniqueUrl = `${endPoint}?symbol=${symbol}&interval=${interval}h`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const rawKlinesData = await fetchData(requestOptions, endPoint);
  return parseAllKlines(rawKlinesData);
}

export async function getOrderBook(symbol: string, limit = 10) {
  const endPoint = "v1/depth";
  const uniqueUrl = `${endPoint}?limit=${limit}&symbol=${symbol}`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const parsedOrderBookData = await fetchData(requestOptions, endPoint);
  return parseAllOrderBook(parsedOrderBookData);
}
export async function getTicker(symbol: string): Promise<TickerData> {
  const endPoint = "v1/ticker/price";
  const uniqueUrl = `${endPoint}?symbol=${symbol}`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const rawTickerData = await fetchData(requestOptions, endPoint);
  const parsedtickerData = ticker(rawTickerData);

  return parsedtickerData;
}

export async function getRecentTrades(symbol: string) {
  const endPoint = "v1/trades";
  const uniqueUrl = `${endPoint}?symbol=${symbol}`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const rawTradesData = await fetchData(requestOptions, endPoint);
  return parseAllTrades(rawTradesData);
}

export default {
  getOrderBook,
  getRecentTrades,
  getTicker,
  getKlines,
};
