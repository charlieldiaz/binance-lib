const axios = require('axios');
const logger = require('./logger')

const tickerModel = require('./models/ticker.js');
let { parseAllTrades } = require("./models/trades");
let { parseAllKlines } = require("./models/klines");
let { parseAllOrderBook } = require("./models/orderBook");

const TEST_NET_BASE_URL = "https://testnet.binancefuture.com/fapi/v1/"

async function fetchData(endPoint, action) {
    try {
        let response = await axios.get(TEST_NET_BASE_URL + endPoint)

        if (response.status === 200) {
            logger.debug({
                weight: response.headers['x-mbx-used-weight-1m'],
                status: response.status,
                action: action,
            })

        } else {
            console.log('BATMAN WAS HERE');
        }
        return response.data;

    }
    catch (e) {
        logger.error({
            weight: e.response.headers['x-mbx-used-weight-1m'],
            status: e.response.status,
            url: e.response.config.url,
            errorCode: e.response.data.code,
            action: action,
        })
        throw new Error("Call failed")
    }
}


async function getKlines(symbol, interval = '1') {
    const action = 'klines';
    const uniqueUrl = `${action}?symbol=${symbol}&interval=${interval}h`
    const rawKlinesData = await fetchData(uniqueUrl, action)
    return parseAllKlines(rawKlinesData)
}

async function getOrderBook(symbol, limit = 10) {
    const action = 'depth';
    const uniqueUrl = `${action}?limit=${limit}&symbol=${symbol}`
    const parsedOrderBookData = await fetchData(uniqueUrl, action)
    return parseAllOrderBook(parsedOrderBookData);
}

async function getTicker(symbol) {
    const action = 'ticker/price';
    const uniqueUrl = `${action}?symbol=${symbol}`
    const rawTickerData = await fetchData(uniqueUrl, action)
    const parsedtickerData = tickerModel.ticker(rawTickerData);
    return parsedtickerData;
}

async function getRecentTrades(symbol) {
    const action = 'trades';
    const uniqueUrl = `${action}?symbol=${symbol}`
    const rawTradesData = await fetchData(uniqueUrl, action)
    return parseAllTrades(rawTradesData)
}


module.exports = { getOrderBook, getRecentTrades, getTicker, getKlines }
