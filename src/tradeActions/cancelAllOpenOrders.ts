import util from "../util";
import fetchData from "./fetchData";

/**
 * Cancels all open orders of the given symbol
 * @param symbol required field
 * @returns true if operation is successful
 */
async function cancelAllOpenOrders(symbol: string): Promise<boolean> {
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

  const resp = await fetchData(requestOptions, endPoint);
  return resp.code === 200;

}

export default cancelAllOpenOrders;
