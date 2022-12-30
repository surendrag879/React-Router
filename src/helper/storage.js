export const setLocalData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));

}

export const getLocalData = (key) => {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;

}