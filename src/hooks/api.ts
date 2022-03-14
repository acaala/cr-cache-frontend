const apiURL = import.meta.env.VITE_API_URL;

const useApi = async (endpoint: string) => {
    return await fetch(`${apiURL}/${endpoint}`).then(r => r.json());
}

export {useApi}