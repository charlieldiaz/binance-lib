const tradeActions = require('./tradeActions')

// let tradeSymbol = 'BTCUSDT';/// This is to be deleted. Just so that it is easier to test

function main() {
    console.log('Welcome to the Binance bot \n\ We provide Orders, recent trades, k-lines and prices. ');

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('What trade symbol you want to search? ', tradeSymbol => {

        tradeActions.getRecentTrades(tradeSymbol)
        tradeActions.getKlines(tradeSymbol)
        tradeActions.getOrderBook(tradeSymbol)
        tradeActions.getTicker(tradeSymbol)
        readline.close();
    });
}
main();
