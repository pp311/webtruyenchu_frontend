import { getConfiguration } from './config';

const BASE_API_DIR = getConfiguration().apiUrl;

export const getData = (url, options = {}) => {
  let resData = fetch(`${BASE_API_DIR}/${url}`, options)
    .then(res => res.json())
    .then((result) => {
      return result
    },
      (error) => {
        return error
      });
  return resData;
}

export const getDataAndHeaders = async (url) => {
  let res = await fetch(`${BASE_API_DIR}/${url}`)
  let data = await res.json()
  let headers = res.headers
  return { data, headers };
}
