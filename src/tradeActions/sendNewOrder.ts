import util from "../util";
import fetchData from "./fetchData";
import {OrderSide, OrderType, TimeInForce} from "../models/enums";

// todo: add return type
export default async function sendNewOrder(
  symbol: string,
  price: number,
  side: OrderSide = OrderSide.BUY,
  timeInForce: TimeInForce = TimeInForce.GOOD_TILL_CANCEL,
  type: OrderType = OrderType.LIMIT,
  quantity: number
) {
  const endPoint = "v1/order";
  const params = util.sortParamsAlphabeticallyOmitEmptySignV({
    symbol,
    timestamp: Date.now(),
    side,
    type,
    quantity,
    price,
    timeInForce,
  });

  let [apiKey, secretKey] = util.getApiKeys();
  const signature = util.getSignature(params, secretKey);

  let url = `${endPoint}?${params}&signature=${signature}`;

  const requestOptions = {
    headers: { "X-MBX-APIKEY": apiKey },
    url,
    method: "POST",
  };

  return await fetchData(requestOptions, endPoint);
}
