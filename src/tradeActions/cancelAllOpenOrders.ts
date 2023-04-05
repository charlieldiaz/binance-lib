import util from "../util";
import fetchData from "./fetchData";

async function cancelAllOpenOrders(symbol: string) {
  const endPoint = "v1/allOpenOrders";
  const params = util.sortParamsAlphabeticallyOmitEmptySignV({
    symbol,
    timestamp: Date.now(),
  });
  let [apiKey, secretKey] = util.getApiKeys();
  const signature = util.getSignature(params, secretKey);

  let url = `${endPoint}?${params}&signature=${signature}`;

  const requestOptions = {
    headers: { "X-MBX-APIKEY": apiKey },
    url,
    method: "DELETE",
  };

  const rawNeqwOrderData = await fetchData(requestOptions, endPoint);
  return rawNeqwOrderData;
}

export default cancelAllOpenOrders;
