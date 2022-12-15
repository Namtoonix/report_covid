import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  GET_LIST_COMPLETED,
  SET_QUERY,
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_DETAIL_SUCCESS,
  GET_COUNTRY_DETAIL_ERROR,
} from "./constants";

export const initialState = {
  error: "",
  loading: false,
  results: [],
  params: {
    current: DEFAULT_PAGE,
    pageSize: DEFAULT_LIMIT,
    total: 0,
  },
  loadingDetail: false,
  detail: {},
  // sortType: OPTIONS_SORT[0].value,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_LIST_COMPLETED:
      return {
        ...state,
        loading: false,
        total: action.payload?.Countries?.length || 0,
        results: action.payload,
      };

    case SET_QUERY:
      return {
        ...state,
        params: action.payload,
      };

    // case SET_SORT:
    //   return {
    //     ...state,
    //     sortType: action.payload,
    //   };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        loadingDetail: true,
        error: "",
      };
    case GET_COUNTRY_DETAIL_SUCCESS:
      return {
        ...state,
        loadingDetail: false,
        detail: action.payload,
      };
    case GET_COUNTRY_DETAIL_ERROR:
      return {
        ...state,
        loadingDetail: false,
        error: action.payload,
      };
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
