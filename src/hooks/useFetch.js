import useFetchSuspense from 'fetch-suspense'
import { useUser } from "../UserContext"

export const useFetch = (url) => { //localhost:8080/demands
    const [user] = useUser()
    const headers = {}
    if (user?.data?.data?.user?.token) headers.auth_token = user.data.data.user.token
    return useFetchSuspense(url, { headers })
}

export const useFetchPost = () => {
    const [user] = useUser()

    return async (url, body, method = null) => {
        const headers = {}

        if (body && !(body instanceof FormData)) headers['Content-Type'] = 'application/json'
        if (user?.data?.data?.user?.token) headers.auth_token = user.data.data.user.token
        const res = await fetch(url, {
            method: method || 'POST',
            headers,
            body: body && (body instanceof FormData ? body : JSON.stringify(body))
        })

        return {
            data: await res.json(),
            error: res.ok ? null : 'Hubo un error en la solicitud.',
        };

        // throw new Error(await res.json())
    }
}

export const useFetchDelete = () => {
    const [user] = useUser();

    return async (url) => {
        const headers = {};
        if (user?.data?.data?.user.token) headers.auth_token = user.data.data.user.token;

        const res = await fetch(url, {
            method: 'DELETE',
            headers,
        });

        return {
            data: await res.json(),
            error: res.ok ? null : 'Hubo un error en la solicitud de eliminación.',
        };
    };
};

export default useFetch;
