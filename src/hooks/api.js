import { useFetch, useFetchPost } from "./useFetch";

const apiHost = 'http://localhost:8080/';

export const useDemandsAlls = () => useFetch(apiHost + 'demands')