import useFetchSuspense from 'fetch-suspense'
import { useUser } from "../UserContext"

export const useFetch = (url) => {
    const [user] = useUser()
    const headers = {}
    if (user?.token) headers.authorization = user.token
    return useFetchSuspense(url, { headers })
}

export const useFetchPost = () => {
    const [user] = useUser()

    return async (url, body, method = null) => {
        const headers = {}

        if (body && !(body instanceof FormData)) headers['Content-Type'] = 'application/json'
        if (user?.token) headers.authorization = user.token
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
        if (user?.token) headers.authorization = user.token;

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
export const useFetchPut = () => {
    const [user] = useUser();

    return async (url) => {
        const headers = {};
        if (user?.token) headers.authorization = user.token;

        const res = await fetch(url, {
            method: 'PUT',
            headers,
        });

        return {
            data: await res.json(),
            error: res.ok ? null : 'Hubo un error en la solicitud de eliminación.',
        };
    };
};


export default useFetch;
