// export let API_URL =  'https://qa-services.solzit.com/api-gateway/api/'; //QA
export let API_URL = 'https://dev-services.solzit.com/api-gateway/api/'; //dev
export let VersionCode = '1.0.8'; //QA

export const API_PATH = () => ({
  apis: {
    GenerateOpt: 'GenerateOpt',
    VerifyOtp: 'VerifyMobileAppOtp',
    GetActiveLoans: 'GetLoanListByMobileNo',
    // GetClientGeneralDetails:'LMSGetClientGeneralDetails',
    LoanTransactionsByLoanId: 'GetLoanTransactionsByLoanId',
    RepaymentScheduleByLoan: 'GetRepaymentScheduleByLoan',
    GetApplicantById: 'GetApplicantById',
    LMSGetLoanList: 'LMSGetLoanList',
    LoanDetailForMobileApp: 'GetLoanDetailForMobileApp',
    LMSManageClientProfilePicture: 'LMSManageClientProfilePicture',
    LMSGetClientProfilePicture: 'LMSGetClientGeneralDetails',
    CreateOkycRequest: 'CreateOkycRequest',
    InitiateOkycRequest: 'InitiateOkycRequest',
    VerifyOKYCRequest: 'VerifyOKYCRequest',
    CompleteOKYCRequest: 'CompleteOKYCRequest',
    GetAllProducts: 'GetAllProducts',
    AddApplication: 'AddApplication',
    PinCode: 'GetAddressDetailsByPincode',
    PanVerifybyPanNumber: 'PanVerifybyPanNumber',
  },
});

export const Regex = {
  // regex for email or phone
  emailOrPhoneRegex:
    /^[0-9]{10,11}$|^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[_a-zA-Z0-9]([\w\-]+)+(\.[a-z0-9-]+)*(\.[a-zA-Z]{2,6})$/,
  //regex for email
  emailRegex: /^[a-zA-Z0-9\s,'-_/]+@[a-zA-Z0-9\s,'-_/]+\.[a-zA-Z0-9]+$/,
  //regex for phone number
  phoneRegex: /^[0-9]{10}$/,
  // regex for OTP
  OTPRegex: /^[0-9]{6}$/,
  // regex for url
  urlRegex:
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  youtubeRegex: '^(http(s)?://)?((w){3}.)?youtu(be|.be)?(.com)?/.+',
  youtubeIDRegex:
    /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  price: /^\d*[1-9]+\d*$/,
  percentage: /^[0-9][0-9]?$|^100$/,
  address: /^[a-zA-Z0-9\s,'-/]*$/,
  cityName: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
  pinCodeRegex: /^[1-9][0-9]{5}$/,
};
