const scope = "home/";

export const GET_LIST = scope + "GET_LIST";
export const GET_LIST_SUCCESS = scope + "GET_LIST_SUCCESS";
export const GET_LIST_ERROR = scope + "GET_LIST_ERROR";
export const GET_LIST_COMPLETED = scope + "GET_LIST_COMPLETED";

export const SET_QUERY = scope + "SET_QUERY";
export const SET_TOTAL_PAGE = scope + "SET_TOTAL_PAGE";
// export const SET_SORT = scope + "SET_SORT";

export const GET_COUNTRY_DETAIL = scope + "GET_COUNTRY_DETAIL";
export const GET_COUNTRY_DETAIL_SUCCESS = scope + "GET_COUNTRY_DETAIL_SUCCESS";
export const GET_COUNTRY_DETAIL_ERROR = scope + "GET_COUNTRY_DETAIL_ERROR";

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;

export const OPTIONS_SORT = [
  {
    value: "confirmed",
    label: "The most total confirmed cases",
  },
  {
    value: "deaths",
    label: "The highest number of deaths",
  },
  {
    value: "recovered",
    label: "The least number of recovered cases",
  },
];

export const CHART_VIEW = [
  {
    id: "confirmed",
    label: "Top 5 total confirmed cases",
    key: "TotalConfirmed",
  },
  {
    id: "deaths",
    label: "Top 5 total deaths case",
    key: "TotalDeaths",
  },
  {
    id: "recovered",
    label: "Top 5 total recovered cases",
    key: "TotalRecovered",
  },
];
