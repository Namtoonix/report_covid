import { fetchJson, handleResponse } from "utils/helper";

const endpoint = `https://restcountries.com/v3.1/name`;
const header = { "Content-Type": "application/json" };

export const ModelCountry = () => {
  const GetDetail = async (name: string) => {
    try {
      const response = await fetchJson(`${endpoint}/${name}?fullText=true`, {
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
    getDetail: GetDetail,
  };
};
