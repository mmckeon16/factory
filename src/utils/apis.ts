import { useFetchData } from './hooks';
import { API_BASEURL } from './config'

export const useUserData = () => {
  return useFetchData(`${API_BASEURL}/user`)
}

export const useXData = () => {
  return useFetchData(`${API_BASEURL}/x`)
}