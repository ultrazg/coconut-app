import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { alert } from '../component/alert'

const httpRequest: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 15000,
})

httpRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    const statusCode = response?.data?.code || response?.data?.retCode

    if (!statusCode) {
      return response.data
    }

    if (statusCode !== 200) {
      return alert('提示', `${response.data.data || response.data.message}`)
    }

    if (statusCode == 200) {
      return response.data
    }

    return response
  },

  (error: any) => {
    const { response } = error
    if (response) {
      alert('网络开小差了')
      return Promise.reject(response.data)
    }
  }
)

export { httpRequest }
