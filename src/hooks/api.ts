const apiURL = import.meta.env.VITE_API_URL;

const useApi = async (endpoint: string) => {
    return await fetch(`${apiURL}/${endpoint}`).then(r => r.json());
}

const scripts: Array<string> = [];
const loadScript = async (source: string) => {
    const element = document.createElement('script');
    element.src = `${apiURL}/${source}`;
    if(scripts.includes(source)) return;
    document.head.appendChild(element);
    scripts.push(source)
};

export {useApi, loadScript}