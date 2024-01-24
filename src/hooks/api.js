import { useFetch, useFetchPost } from "./useFetch";

const apiHost = 'http://localhost:8080/';


//------------------------------------------------demands -----------------------
export const useDemandsAlls = () => useFetch(apiHost + 'demands')
export const useDemands = (query) => useFetch('demands?' + new URLSearchParams(query).toString())
export const useDemand = (id) => useFetch(apiHost + `demands/${id}`)
export const useProposalByDemands = (id) => useFetch(apiHost + `demands/${id}` + '/proposals')
export const useDeleteDemands = (id) => useFetchPost(apiHost + `demands/${id}`)
//----------------------------------------------------proposals-------------------------------
export const useNewProposal = (id) => useFetchPost(apiHost + `/proposals/${id}`)
export const useEditProposal = (id) => useFetchPost(apiHost + `/proposals/${id}`)
export const useDeleteProposal = (id) => useFetchPost(apiHost + `/proposals/${id}`)
export const useUpdateStatusProposal = (id) => useFetchPost(apiHost + `/proposals/${id}` + '/updateStatus')

//---------------------------------------------------user-------------------------------------
export const useLogin = () => useFetchPost(apiHost + 'user/login')
export const useDataUser = (id) => useFetchPost(apiHost + `users/${id}`)
export const UseRegister = () => useFetchPost(apiHost + 'users')

//---------------------------------------------------votes-------------------------------------

export const useUserActions = () => {
  const fetchPost = useFetchPost()
  return {
    login: (email, password) => fetchPost(apiHost + '/users/login', { email, password }),
    createEntry: (title, place, description) => fetchPost(apiHost + '/entries', { title, place, description }),
    removeEntry: (id) => fetchPost(apiHost + '/entries/' + id, null, 'DELETE'),
    addPhoto: (id, fd) => fetchPost(apiHost + '/entries/' + id + '/photos', fd),
    vote: (id, value) => fetchPost(apiHost + '/proposals/' + id + '/votes', { value })
  }
}