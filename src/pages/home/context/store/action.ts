import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  SET_QUERY,
  SET_TOTAL_PAGE,
  GET_LIST_COMPLETED,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_DETAIL_SUCCESS,
  GET_COUNTRY_DETAIL_ERROR,
} from "./constants";

export const getReportData = (payload: any) => ({
  type: GET_LIST,
  payload,
});
export const getReportDataSuccess = (payload: any) => ({
  type: GET_LIST_SUCCESS,
  payload,
});
export const getReportDataError = (payload: any) => ({
  type: GET_LIST_ERROR,
  payload,
});

export const getReportDataCompleted = (payload: any) => ({
  type: GET_LIST_COMPLETED,
  payload,
});

export const setQuery = (payload: any) => ({
  type: SET_QUERY,
  payload,
});

export const setTotalPage = (payload: any) => ({
  type: SET_TOTAL_PAGE,
  payload,
});

export const getCountryDetail = (payload: any) => ({
  type: GET_COUNTRY_DETAIL,
  payload,
});
export const getCountryDetailSuccess = (payload: any) => ({
  type: GET_COUNTRY_DETAIL_SUCCESS,
  payload,
});
export const getCountryDetailError = (payload: any) => ({
  type: GET_COUNTRY_DETAIL_ERROR,
  payload,
});

// export const setSort = (payload: any) => ({
//   type: SET_SORT,
//   payload,
// });
