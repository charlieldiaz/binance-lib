import fetchData from "./fetchData";

import {parseTicker, Ticker} from "../models/ticker";
import {Trade, parseAllTrades} from "../models/trades";
import {Kline, parseAllKlines} from "../models/kLines";
import {OrderBook, parseAllOrderBook} from "../models/orderBook";
import {Interval} from "../models/enums"

/**
 *
 * @param symbol required
 * @param limit optional, default 500 [1,1000]
 * @param interval<Interval> required, default one minute
 */
export async function getKlines(symbol: string, limit = 500, interval: Interval = Interval.ONE_MINUTE ): Promise<Kline[]> {
  const endPoint = "v1/klines";
  const uniqueUrl = `${endPoint}?symbol=${symbol}&limit=${limit}&interval=${interval}`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const resp = await fetchData(requestOptions, endPoint);
  return parseAllKlines(resp);
}

/**
 *
 * @param symbol required
 * @param limit default 10, possible [5, 10, 20, 50, 100, 500, 1000]
 */
export async function getOrderBook(symbol: string, limit = 10): Promise<OrderBook> {
  const endPoint = "v1/depth";
  const uniqueUrl = `${endPoint}?limit=${limit}&symbol=${symbol}`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const resp = await fetchData(requestOptions, endPoint);
  return parseAllOrderBook(resp);
}

/**
 *
 * @param symbol required
 */
export async function getTicker(symbol: string): Promise<Ticker> {
  const endPoint = "v1/ticker/price";
  const uniqueUrl = `${endPoint}?symbol=${symbol}`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const rawTickerData = await fetchData(requestOptions, endPoint);
  return parseTicker(rawTickerData);
}

/**
 *
 * @param symbol required
 */
export async function getRecentTrades(symbol: string): Promise<Trade[]> {
  const endPoint = "v1/trades";
  const uniqueUrl = `${endPoint}?symbol=${symbol}`;
  const requestOptions = {
    url: uniqueUrl,
    method: "GET",
  };
  const rawTradesData = await fetchData(requestOptions, endPoint);
  return parseAllTrades(rawTradesData);
}
