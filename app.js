const tradeActions = require('./tradeActions')
const example = require('./example')
const logger = require('./logger')
let tradeSymbol = 'BTCUSDT';/// This is to be deleted. Just so that it is easier to test
let price = 20000;

async function main() {
    console.log('Welcome to the Binance bot \n\ We provide Orders, recent trades, k-lines and prices. ');

    try {
        // let trades = await tradeActions.getRecentTrades(tradeSymbol)
        // let klines = await tradeActions.getKlines(tradeSymbol)
        // let orderBook = await tradeActions.getOrderBook(tradeSymbol)
        // let ticker = await tradeActions.getTicker(tradeSymbol)

        // let newOrder = await tradeActions.sendNewOrder(tradeSymbol, price, "BUY", "GTC", "LIMIT", 0.001)
        // console.log(newOrder);

        // let currentPositions = await tradeActions.getCurrentPositions(tradeSymbol)
        // console.log(currentPositions);

        let cancelledopenOrders = await tradeActions.cancelAllOpenOrders(tradeSymbol)
        console.log(cancelledopenOrders);

        // return;
        // let PamirExample = await example.getOpenOrders(tradeSymbol)
        // console.log(PamirExample);

    }
    catch (e) {
        console.log("Here in APP we catched an error");
    }


    //     ////   All below is the logs /////// to be deleted
    // console.log('--------    ******   ---------   trades   ------  ******* ----');
    // console.log(trades);
    // console.log('----------  *******  -------  orderBook ------  *******  -----');
    // console.log(orderBook);
    // console.log('---------- *******  ------  klines ------------- *******  ----');
    // console.log(klines);
    // console.log('---------  ******  -------  ticker ----------  *******  ------');
    // console.log(ticker);
    //     ///////////////////////////
    // });

}

(async () => {
    await main();
})()