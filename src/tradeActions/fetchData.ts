import axios, { AxiosError } from "axios";
import logger from "../logger";

const TEST_NET_BASE_URL = "https://testnet.binancefuture.com/fapi/";

interface requestOptions {
  headers?: { "X-MBX-APIKEY": string };
  url: string;
  method: string;
}

async function fetchData(requestOptions: requestOptions, endPoint: string) {
  try {
    const uniqueUrl = requestOptions.url;
    requestOptions.url = `${TEST_NET_BASE_URL}${uniqueUrl}`;

    let response = await axios(requestOptions);

    if (response.status === 200) {
      logger.debug({
        weight: response.headers["x-mbx-used-weight-1m"],
        status: response.status,
        endPoint: endPoint,
      });
    }
    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.log(e);
      console.log("---------------------------------------------------------");
      logger.error({
        weight: e.response?.headers["x-mbx-used-weight-1m"],
        status: e.response?.status,
        url: e.response?.config.url,
        errorCode: e.response?.data?.code,
        errorMsg: e.response?.data.msg,
        endPoint: endPoint,
      });
    } else if (e instanceof Error) {
      console.log(e);
    }
    throw new Error("Call failed");
  }
}

export default fetchData;
