import axios from 'axios'
import useToast from '@/hooks/useToast'
const { Toast } = useToast()
const instance = axios.create({
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  },
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

export const get = (config, errorCallback) => {
  return dealWithResponse(instance({ method: 'get', ...config }), errorCallback)
}

export const post = (config, errorCallback) => {
  return dealWithResponse(instance({ method: 'post', ...config }), errorCallback)
}

export const patch = (config, errorCallback) => {
  return dealWithResponse(instance({ method: 'patch', ...config }), errorCallback)
}

export const request = (config, errorCallback) => {
  return dealWithResponse(instance(config), errorCallback)
}

export function dealWithResponse (promise, errorCallback) {
  return promise.then(response => {
    const { data } = response
    if (data?.errno === 0) {
      return [null, data.data, response]
    } else {
      return Promise.reject(response)
    }
  }).catch(err => {
    if (errorCallback === false) { // 不处理

    } else if (axios.isCancel(err)) {

    } else {
      if (typeof errorCallback === 'function') {
        errorCallback(err)
      } else {
        const { data = {} } = err
        Toast.fail({ message: data.desc })
      }
    }
    return [err, null]
  })
}
