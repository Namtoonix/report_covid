import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  GET_LIST_COMPLETED,
  SET_QUERY,
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  OPTIONS_SORT,
  SET_SORT,
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
  sortBy: OPTIONS_SORT[0].value,
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

    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
