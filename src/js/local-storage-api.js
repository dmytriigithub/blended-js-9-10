export const TASK_LS_KEY = "task";
export const THEME_LS_KEY = "theme";

export const getFromLocalStorage = (key) => {
    const saved = localStorage.getItem(key);
    return JSON.parse(saved);
};

export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};