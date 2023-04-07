interface OrderBookRawData {
  lastUpdateId: number;
  E: number;
  T: Date;
  bids: { [key: string]: string }[];
  asks: { [key: string]: string }[];
}

interface OrderBookParsedData {
  lastUpdateId: number;
  msgOutputTime: number;
  transactionTime: Date;
  bids: { price: number; qty: number }[];
  asks: { price: number; qty: number }[];
}

export default function parseAllOrderBook(
  orderBookRawData: OrderBookRawData
): OrderBookParsedData {
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
