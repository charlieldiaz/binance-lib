interface tradesRawData {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
}

function parseTradesItem(singleTrade: tradesRawData) {
  return {
    id: `${singleTrade.id}`,
    price: parseFloat(singleTrade.price),
    quantity: parseFloat(singleTrade.qty),
    quote: parseFloat(singleTrade.quoteQty),
    time: new Date(singleTrade.time),
    isBuyerMaker: singleTrade.isBuyerMaker,
  };
}

async function parseAllTrades(tradesRawData: tradesRawData[]) {
  let allTrades: any[] = [];
  tradesRawData.forEach((singleTrade) => {
    let item = parseTradesItem(singleTrade);
    allTrades.push(item);
  });

  return allTrades;
}

export default parseAllTrades;
