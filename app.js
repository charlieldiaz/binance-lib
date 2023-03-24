const orderUrl = ['https://testnet.binancefuture.com/fapi/v1/depth?symbol=BTCUSDT', 'Orders'];
const tradesUrl = ['https://testnet.binancefuture.com/fapi/v1/depth?symbol=BTCUSDT', 'Trades'];
const kLinesUrl = ['https://testnet.binancefuture.com/fapi/v1/depth?symbol=BTCUSDT', 'K-Lines'];
const priceUrl = ['https://testnet.binancefuture.com/fapi/v1/depth?symbol=BTCUSDT', 'Prices'];

async function getData([url, action]) {


    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(`==== ${action} ====`);
    console.log(jsonResponse);
}

getData(orderUrl);
getData(tradesUrl);
getData(kLinesUrl);
getData(priceUrl);