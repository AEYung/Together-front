import axios, {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios';

export const API = axios.create({
    baseURL: "http://10.82.17.149:8080",
})

API.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const access_token: string | null = localStorage.getItem("AccessToken");
      const refresh_token: string | null = localStorage.getItem("RefreshToken");
      const token_expiredAt: string = localStorage.getItem("expiredTime") ?? '';
  
      if (config.headers) {
        config.headers['Authorization'] =
          access_token &&
          new Date(token_expiredAt).getTime() - new Date().getTime() > 60000
            ? `Bearer ${localStorage.getItem("AccessToken")}`
            : '';
  
        config.headers['refreshToken'] = refresh_token
           ? `Bearer ${localStorage.getItem("RefreshToken")}`
           : '';
      }
      return config;
    },
  
    (err: AxiosError) => {
      return Promise.reject(err);
    }
  );
  
  API.interceptors.response.use(
    (res: AxiosResponse) => {
      return res;
    },
  
    async (err: AxiosError) => {
      if (
        err.config &&
        err.response &&
        (err.response.status === 401 || err.response.status === 404)
      ) {
        const refresh_token: string | null =
        localStorage.getItem("RefreshToken") ?? '';
        axios.defaults.headers.common["RefreshToken"] = refresh_token

        try {
          const { data } = await axios.post(
            'http://10.82.17.149:8080/auth/refresh',
            {},
            {
              headers: {
                RefreshToken: `Bearer ${refresh_token}`,
              },
            }
          );
  
          localStorage.setItem('AccessToken', data.accessToken);
          localStorage.setItem('RefreshToken', data.refreshToken);
          localStorage.setItem('expiredTime', data.expiredAt);
          return await API.request(err.config);
        } catch (err) {
          localStorage.removeItem('AccessToken');
          localStorage.removeItem('RefreshToken');
          localStorage.removeItem('expiredTime');
          window.location.href = '/signin'
          return Promise.reject(err);
        }
      }
      return Promise.reject(err);
    }
  );
