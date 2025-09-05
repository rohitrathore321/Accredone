import {createApi} from '@reduxjs/toolkit/query/react';
import {API_PATH, API_URL} from '../config/config';
import { axiosBaseQuery } from '../config/axiosBaseQuery';

export const authService = createApi({
  reducerPath: 'logInService',
  baseQuery: axiosBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    GenerateOTP: builder.mutation({
      query: credentials => ({
        url: `${API_PATH().apis.GenerateOpt}?mobileNo=${credentials}`,
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
    VerifyOTP: builder.mutation({
      query: credentials => ({
        url: `${API_PATH().apis.VerifyOtp}?mobileNo=${
          credentials.MobileNumber
        }&otp=${credentials.otpString}`,
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),

    GetApplicantById: builder.query({
      query: ({accessToken, applicantId}) => ({
        url: `${API_PATH().apis.GetApplicantById}?applicantId=${applicantId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'text/plain',
        },
      }),
    }),
  }),
});

export const {useGenerateOTPMutation, useVerifyOTPMutation} = authService;
