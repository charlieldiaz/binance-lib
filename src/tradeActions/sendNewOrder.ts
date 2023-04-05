import util from "../util";
import fetchData from "./fetchData";

export default async function sendNewOrder(
  symbol: string,
  price: number,
  side = "BUY",
  timeInForce = "GTC",
  type = "LIMIT",
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

  const rawNeqwOrderData = await fetchData(requestOptions, endPoint);
  return rawNeqwOrderData;
}
