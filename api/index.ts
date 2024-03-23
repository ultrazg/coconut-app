import { httpRequest } from '../util/httpRequest'

export const fetchSearch = (params: any) =>
  httpRequest.post(`/search`, params)
