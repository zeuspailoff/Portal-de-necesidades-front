import { useFetch, useFetchPost, useFetchDelete, useFetchPut } from "./useFetch";

const apiHost = import.meta.env.VITE_BACKEND_URL;


//------------------------------------------------demands -----------------------
export const useDemandsAlls = () => useFetch(apiHost + 'demands')
export const useDemands = (query) => useFetch('demands?' + new URLSearchParams(query).toString())
export const useDemand = (id) => useFetch(apiHost + `demands/${id}`)
export const useProposalByDemands = (id) => useFetch(apiHost + `demands/${id}/proposals`)
export const useDemandsByUserId = (id) => useFetch(apiHost + `users/${id}/demands`)
export const useAllCategories = () => useFetch(apiHost + 'categories')

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
export const useUserList = () => useFetch(apiHost + 'users')



export const useUserActions = () => {
  const fetchPost = useFetchPost()
  const fetchDelete = useFetchDelete()
  const fetchPut = useFetchPut()
  return {
    validate: (registrationcode) => useFetch(apiHost + `users/validate/${registrationcode}`),
    dataUser: (id, fd) => fetchPost(apiHost + `users/${id}`, fd, "PUT"),
    userProfile: (id) => useFetch(apiHost + `users/${id}`),
    register: (body) => fetchPost(apiHost + 'users', body),
    login: (body) => fetchPost(apiHost + 'users/login', body),
    removeEntry: (id) => fetchPost(apiHost + 'entries/' + id, null, 'DELETE'),
    addPhoto: (id, fd) => fetchPost(apiHost + 'entries/' + id + '/photos', fd),
    vote: (id, body) => fetchPost(apiHost + 'proposals/' + id + '/votes', body),
    newDemand: (fd) => fetchPost(apiHost + 'demands', fd),
    editDemand: (id, fd) => fetchPost(apiHost + `demands/${id}`, fd, 'PUT'),
    newProposal: (id, fd) => fetchPost(apiHost + `proposals/${id}`, fd),
    deleteProposal: (id, demand_id) => fetchDelete(apiHost + `proposals/${id}/demands/${demand_id}`),
    resetPassword: (email) => fetchPost(apiHost + `users/recover`, email),
    userDemands: (id) => useFetch(apiHost + `users/${id}/demands`),
    newPassword: (body, recoveryCode) => fetchPost(apiHost + `users/SetPassByrecover/${recoveryCode}`, body, "PUT"),
    popularProposalsByUserId: (id) => useFetch(apiHost + `proposals/user/${id}`),
    deleteFile: (id) => fetchDelete(apiHost + `files/${id}/delete`),
    closeDemands: (id) => fetchPut(apiHost + `demands/${id}/close`)
  }
}
//---------------------------------------------------votes-------------------------------------

