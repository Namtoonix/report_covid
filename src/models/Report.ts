import { fetchJson, handleResponse } from "utils/helper";
import { API_URL } from "./constants";

const endpoint = `${API_URL}/summary`;
const header = { "Content-Type": "application/json" };

export const ModelReport = () => {
  const GetList = async () => {
    try {
      const response = await fetchJson(`${endpoint}`, {
        method: "GET",
        headers: header,
      });

      return handleResponse(response);
    } catch (error) {
      return Promise.resolve({
        data: error,
        isError: true,
      });
    }
  };

  return {
    getList: GetList,
  };
};
