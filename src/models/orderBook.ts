interface OrderBookRawData {
  lastUpdateId: number;
  E: number;
  T: Date;
  bids: { [key: string]: string }[];
  asks: { [key: string]: string }[];
}

export interface OrderBook {
  lastUpdateId: number;
  msgOutputTime: number;
  transactionTime: Date;
  bids: { price: number; qty: number }[];
  asks: { price: number; qty: number }[];
}

export function parseAllOrderBook(
  orderBookRawData: OrderBookRawData
): OrderBook {
  return {
    lastUpdateId: orderBookRawData.lastUpdateId,
    msgOutputTime: orderBookRawData.E,
    transactionTime: orderBookRawData.T,
    bids: orderBookRawData.bids.map((element) => {
      return {
        price: parseFloat(element[0]),
        qty: parseFloat(element[1]),
      };
    }),

    asks: orderBookRawData.asks.map((element) => {
      return {
        price: parseFloat(element[0]),
        qty: parseFloat(element[1]),
      };
    }),
  };
}
