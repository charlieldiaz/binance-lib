const tradeActions = require('./tradeActions')

// let tradeSymbol = 'BTCUSDT';/// This is to be deleted. Just so that it is easier to test

async function main() {
    console.log('Welcome to the Binance bot \n\ We provide Orders, recent trades, k-lines and prices. ');

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('What trade symbol you want to search? ', async (tradeSymbol) => {


        let trades = await tradeActions.getRecentTrades(tradeSymbol)
        let klines = await tradeActions.getKlines(tradeSymbol)
        let orderBook = await tradeActions.getOrderBook(tradeSymbol)
        let ticker = await tradeActions.getTicker(tradeSymbol)
        readline.close();
    });
}


(async ()=> {
    await main();
})()
