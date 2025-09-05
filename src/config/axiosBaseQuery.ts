import axios from 'axios';

export const axiosBaseQuery =
  ({baseUrl}: any) =>
  async ({url, method, data, headers}: any) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        headers,
      });
      return {data: result.data};
    } catch (axiosError) {
      let err: any = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
