import useFetchSuspense from 'fetch-suspense'
import { useUser } from "../UserContext"

export const useFetch = (url) => { //localhost:8080/demands
    const [user] = useUser()
    const headers = {}
    if (user?.token) headers.auth_token = user.token
    return useFetchSuspense(url, { headers })
}

export const useFetchPost = () => {
    const [user] = useUser()
    return async (url, body, method = null) => {
        const headers = {}

        if (body && !(body instanceof FormData)) headers['Content-Type'] = 'application/json'

        if (user?.token) headers.auth_token = user.token

        const res = await fetch(url, {
            method: method || 'POST',
            headers,
            body: body && (body instanceof FormData ? body : JSON.stringify(body))
        })
    
        return await res.json()

        // throw new Error(await res.json())
    }
}

export default useFetch
