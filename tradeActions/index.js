
const sendNewOrderfile = require('./sendNewOrder')
const cancelAllOpenOrdersfile = require('./cancelAllopenOrders')
const getCurrentPositionsfile = require('./getCurrentPositions')
const { fetchData } = require('./fetchData')

const tickerModel = require('../models/ticker.js');
let { parseAllTrades } = require("../models/trades");
let { parseAllKlines } = require("../models/klines");
let { parseAllOrderBook } = require("../models/orderBook");

const TEST_NET_BASE_URL = "https://testnet.binancefuture.com/fapi/v1/"

async function getKlines(symbol, interval = '1') {
    const endPoint = 'v1/klines';
    const uniqueUrl = `${endPoint}?symbol=${symbol}&interval=${interval}h`
    const requestOptions = {
        url: uniqueUrl,
        method: "GET"
    };
    const rawKlinesData = await fetchData(requestOptions, endPoint)
    return parseAllKlines(rawKlinesData)
}

async function getOrderBook(symbol, limit = 10) {
    const endPoint = 'v1/depth';
    const uniqueUrl = `${endPoint}?limit=${limit}&symbol=${symbol}`
    const requestOptions = {
        url: uniqueUrl,
        method: "GET"
    };
    const parsedOrderBookData = await fetchData(requestOptions, endPoint)
    return parseAllOrderBook(parsedOrderBookData);
}

async function getTicker(symbol) {
    const endPoint = 'v1/ticker/price';
    const uniqueUrl = `${endPoint}?symbol=${symbol}`
    const requestOptions = {
        url: uniqueUrl,
        method: "GET"
    };
    const rawTickerData = await fetchData(requestOptions, endPoint)
    const parsedtickerData = tickerModel.ticker(rawTickerData);
    return parsedtickerData;
}

async function getRecentTrades(symbol) {
    const endPoint = 'v1/trades';
    const uniqueUrl = `${endPoint}?symbol=${symbol}`
    const requestOptions = {
        url: uniqueUrl,
        method: "GET"
    };
    const rawTradesData = await fetchData(requestOptions, endPoint)
    return parseAllTrades(rawTradesData)
}
const sendNewOrder = sendNewOrderfile.sendNewOrder;
const getCurrentPositions = getCurrentPositionsfile.getCurrentPositions;
const cancelAllOpenOrders = cancelAllOpenOrdersfile.cancelAllOpenOrders;

module.exports = { getOrderBook, getRecentTrades, getTicker, getKlines, sendNewOrder, cancelAllOpenOrders, getCurrentPositions }