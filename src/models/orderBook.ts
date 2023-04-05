interface orderBookRawData {
  lastUpdateId: number;
  E: number;
  T: number;
  bids: { [key: string]: string }[];
  asks: { [key: string]: string }[];
}

export default async function parseAllOrderBook(
  orderBookRawData: orderBookRawData
) {
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
