import { useFetch, useFetchPost } from "./useFetch";

const apiHost = 'http://localhost:8080/';


//------------------------------------------------demands -----------------------
export const useDemandsAlls = () => useFetch(apiHost + 'demands')
export const useDemands = (query) => useFetch('demands?' + new URLSearchParams(query).toString())
export const useDemand = (id) => useFetch(apiHost + `demands/${id}`)

//----------------------------------------------------proposals-------------------------------


//---------------------------------------------------user-------------------------------------
export const useLogin = () => useFetchPost(apiHost + 'user/login')
export const useDataUser = (id) => useFetchPost(apiHost + `users/${id}`)


