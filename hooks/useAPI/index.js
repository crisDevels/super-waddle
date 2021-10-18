import axios from "axios"
import useSWR from "swr";

const fetcher = async (url) => {
  const request =  await axios(url)
  return request.data;
}

export const useAPI = (url) => {
  const { data, error } = useSWR(url, fetcher)
  
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
   }
}