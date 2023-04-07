interface tradesRawData {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
}

export interface Trade {
  id: string;
  price: number;
  quantity: number;
  quote: number;
  time: Date;
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

export function parseAllTrades(tradesRawData: tradesRawData[]): Trade[] {
  let allTrades: Trade[] = [];
  tradesRawData.forEach((singleTrade) => {
    let item = parseTradesItem(singleTrade);
    allTrades.push(item);
  });

  return allTrades;
}
