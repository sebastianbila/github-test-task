import { isValidObject } from "./commonHelpers";

export function queryParser(query: any) {
  const noQuery = Object.keys(query).length === 0;
  if (noQuery) return "";

  const queryArray = Object.keys(query).map((i) => {
    if (isValidObject(query[i])) {
      return `${i}=${query[i]}`;
    }
  });
  return queryArray.join("&");
}

export function withQuery(apiUrl: string, query: any = {}) {
  const parseQuery = queryParser(query);
  return `${apiUrl}?${parseQuery}`;
}
