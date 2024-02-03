import { useFetch, useFetchPost, useFetchDelete } from "./useFetch";

const apiHost = 'http://localhost:8080/';


//------------------------------------------------demands -----------------------
export const useDemandsAlls = () => useFetch(apiHost + 'demands')
export const useDemands = (query) => useFetch('demands?' + new URLSearchParams(query).toString())
export const useDemand = (id) => useFetch(apiHost + `demands/${id}`)
export const useProposalByDemands = (id) => useFetch(apiHost + `demands/${id}/proposals`)
export const useDemandsByUserId = (id) => useFetch(apiHost + `users/${id}/demands`)

export const useDeleteDemands = (id) => {
  const deleteUrl = apiHost + `demands/${id}`;
  const deleteDemand = useFetchDelete();
  return () => deleteDemand(deleteUrl);
};
export const useNewDemands = (fd) => useFetchPost(apiHost + `demands`, fd)
//----------------------------------------------------proposals-------------------------------
export const useNewProposal = (id) => useFetchPost(apiHost + `proposals/${id}`)
export const useEditProposal = (id) => useFetchPost(apiHost + `proposals/${id}`)

export const useDeleteProposals = (id) => {
  const deleteUrl = apiHost + `proposals/${id}`;
  const deleteProposal = useFetchDelete();
  return () => deleteProposal(deleteUrl);
};
export const useUpdateStatusProposal = (id) => useFetchPost(apiHost + `proposals/${id}` + '/updateStatus')

//---------------------------------------------------user-------------------------------------

export const useUserActions = () => {
  const fetchPost = useFetchPost()
  return {
    validate: (registrationcode) => useFetch(apiHost + `users/validate/${registrationcode}`),
    dataUser: (id) => fetchPost(apiHost + `users/${id}`),
    register: (body) => fetchPost(apiHost + 'users', body),
    login: (body) => fetchPost(apiHost + 'users/login', body),
    createEntry: (title, place, description) => fetchPost(apiHost + '/entries', { title, place, description }),
    removeEntry: (id) => fetchPost(apiHost + 'entries/' + id, null, 'DELETE'),
    addPhoto: (id, fd) => fetchPost(apiHost + 'entries/' + id + '/photos', fd),
    vote: (id, value) => fetchPost(apiHost + 'proposals/' + id + '/votes', { value }),
    newDemand: (fd) => fetchPost(apiHost + 'demands', fd),
    newProposal: (id, fd) => fetchPost(apiHost + `proposals/${id}`, fd),
  }
}
//---------------------------------------------------votes-------------------------------------



