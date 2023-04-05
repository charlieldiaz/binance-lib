import { createHmac } from "crypto";

class KeyValue {
  key: string;
  value: any;

  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

  toString(): string {
    return encodeURIComponent(this.key) + "=" + encodeURIComponent(this.value);
  }
}

interface requestParams {
  [key: string]: any;
}

function sortParamsAlphabetically(requestParams: requestParams): string {
  let query = [];
  for (let key in requestParams) {
    if (requestParams.hasOwnProperty(key)) {
      query.push(new KeyValue(key, requestParams[key]));
    }
  }
  query.sort(function (a, b) {
    return a.key < b.key ? -1 : 1;
  });
  return query.join("&");
}

// Object.filter = (obj, predicate) =>
//   Object.fromEntries(Object.entries(obj).filter(predicate));

// function parameterFilter(params = {}) {
//   return Object.filter(params, ([key, val]) => val.length !== 0);
// }

function sortParamsAlphabeticallyOmitEmpty(
  requestParams: requestParams
): string {
  let query = [];
  for (let key in requestParams) {
    if (requestParams.hasOwnProperty(key)) {
      if (
        typeof requestParams[key] === "string" &&
        requestParams[key].length === 0
      ) {
        continue;
      }
      query.push(new KeyValue(key, requestParams[key]));
    }
  }
  query.sort(function (a, b) {
    return a.key < b.key ? -1 : 1;
  });
  return "?" + query.join("&");
}

function sortParamsAlphabeticallyOmitEmptySignV(
  requestParams: requestParams
): string {
  let query = [];
  for (let key in requestParams) {
    if (requestParams.hasOwnProperty(key)) {
      if (
        typeof requestParams[key] === "string" &&
        requestParams[key].length === 0
      ) {
        continue;
      }
      query.push(new KeyValue(key, requestParams[key]));
    }
  }
  query.sort(function (a, b) {
    return a.key < b.key ? -1 : 1;
  });
  return query.join("&");
}

function getSignature(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload, "utf8").digest("hex");
}

function getApiKeys(): [string, string] {
  const secretKey = process.env.SECRET_KEY;
  const apiKey = process.env.API_KEY;
  if (!secretKey || !apiKey) {
    throw Error("Env variable api keys missing!");
  }
  return [apiKey, secretKey];
}

export default {
  getApiKeys,
  sortParamsAlphabetically,
  sortParamsAlphabeticallyOmitEmpty,
  getSignature,
  sortParamsAlphabeticallyOmitEmptySignV,
};
