import util from "../util";
import fetchData from "./fetchData";

export default async function getCurrentPositions(symbol = "") {
  let [apiKey, secretKey] = util.getApiKeys();
  const endPoint = "v2/positionRisk";
  const payloadParam = util.sortParamsAlphabeticallyOmitEmptySignV({
    symbol,
    timestamp: Date.now(),
  });
  const signature = util.getSignature(payloadParam, secretKey);

  let url = `${endPoint}?${payloadParam}&signature=${signature}`;

  const requestOptions = {
    headers: { "X-MBX-APIKEY": apiKey },
    url,
    method: "GET",
  };

  const rawNeqwOrderData = await fetchData(requestOptions, endPoint);
  return rawNeqwOrderData;
}
