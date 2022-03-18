const apiURL = import.meta.env.VITE_API_URL;

const useApi = async (endpoint: string) => {
    return await fetch(`${apiURL}/${endpoint}`).then(r => r.json());
}

const loadScript = async (source: string) => {
    const element = document.createElement('script');
    element.src = `${apiURL}/${source}`
    document.head.appendChild(element);
};

export {useApi, loadScript}