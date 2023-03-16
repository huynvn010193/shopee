import axios, { AxiosError } from 'axios'
import HttpStatusCode from 'src/contansts/httpStatusCode.enum'

// hàm check có phải Error hay không
export function isAxiosError<T>(error: unknown): error is AxiosError {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

// check error 422
export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
