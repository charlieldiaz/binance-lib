const tradeActions = require('./tradeActions')
const logger = require('./logger')
let tradeSymbol = 'BTCUSDT';/// This is to be deleted. Just so that it is easier to test

async function main() {
    console.log('Welcome to the Binance bot \n\ We provide Orders, recent trades, k-lines and prices. ');

    try {
        let trades = await tradeActions.getRecentTrades(tradeSymbol)
        let klines = await tradeActions.getKlines(tradeSymbol)
        let orderBook = await tradeActions.getOrderBook(tradeSymbol)
        let ticker = await tradeActions.getTicker(tradeSymbol)

    } catch (e) {
        console.log("Here we catched an error");
    }


    //     ////   All below is the logs /////// to be deleted
    //     // logger.info('--------    ******   ---------   trades   ------  ******* ----');
    //     // console.log(trades);
    //     // logger.info('----------  *******  -------  orderBook ------  *******  -----');
    //     // logger.info(orderBook);
    //     // logger.warn('---------- *******  ------  klines ------------- *******  ----');
    //     // logger.info(klines);
    //     // logger.info('---------  ******  -------  ticker ----------  *******  ------');
    //     logger.info(ticker);
    //     ///////////////////////////
    // });

}

(async () => {
    await main();
})()