import {createApi} from '@reduxjs/toolkit/query/react';
import {API_PATH, API_URL} from '../config/config';
import { axiosBaseQuery } from '../config/axiosBaseQuery';

export const authService = createApi({
  reducerPath: 'logInService',
  baseQuery: axiosBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({

    login: builder.mutation({
      query: credentials => ({
        url: `${API_PATH().apis.login}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: credentials,
      }),
    }),
  }),
});

export const {useLoginMutation} = authService;
