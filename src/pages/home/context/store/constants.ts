const scope = "home/";

export const GET_LIST = scope + "GET_LIST";
export const GET_LIST_SUCCESS = scope + "GET_LIST_SUCCESS";
export const GET_LIST_ERROR = scope + "GET_LIST_ERROR";
export const GET_LIST_COMPLETED = scope + "GET_LIST_COMPLETED";

export const SET_QUERY = scope + "SET_QUERY";
export const SET_TOTAL_PAGE = scope + "SET_TOTAL_PAGE";
export const SET_SORT = scope + "SET_SORT";

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;

export const COLUMNS = [
  {
    title: "Country",
    dataIndex: "Country",
  },
  {
    title: "TotalConfirmed",
    dataIndex: "TotalConfirmed",
    width: "20%",
  },
  {
    title: "TotalDeaths",
    dataIndex: "TotalDeaths",
    width: "20%",
  },
  {
    title: "TotalRecovered",
    dataIndex: "TotalRecovered",
    width: "20%",
  },
];

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
