import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios'
import { showFailToast } from 'vant'

type AjaxResult = {
  message: string
  code: 0 | 1
  data: Record<string, any>
}& AxiosResponse

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error: AxiosError) => {
    // console.log(error);
    return Promise.reject()
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const result: AjaxResult = response.data
      if (result.code === 1) {
        showFailToast(result.message)
      }
      return result
    } else {
      return response
    }
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject()
  }
)

export default service
