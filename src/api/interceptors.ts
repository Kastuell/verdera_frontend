import axios, { type CreateAxiosDefaults } from "axios";


const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosInst = axios.create(options);

// axiosInst.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalRequest = error.config;
//     console.log(errorCatch(error));
//     if (
//       (error?.response?.status === 401 ||
//         errorCatch(error) === "jwt expired" ||
//         errorCatch(error) === "Refresh token not passed" ||
//         errorCatch(error) === "Unauthorized" ||
//         errorCatch(error) === "jwt must be provided") &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         await authService.getNewTokens();
//         return axiosInst.request(originalRequest);
//       } catch (error) {
//         if (errorCatch(error) === "jwt expired") removeFromStorage();
//       }
//     }

//     throw error;
//   }
// );

// axiosInst.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error?.response?.status === 400 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//     }

//     throw error;
//   }
// );

export { axiosInst };
