import { body } from "./refs";
import { THEME_LS_KEY, getFromLocalStorage, saveToLocalStorage } from "./local-storage-api";

export function handlerToggleTheme() {
    const theme = getFromLocalStorage(THEME_LS_KEY) || "dark";

    if (theme === "dark") {
        saveToLocalStorage(THEME_LS_KEY, "light");
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
    } else {
        saveToLocalStorage(THEME_LS_KEY, "dark");
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
    }
}

export function loadTheme() {
    const theme = getFromLocalStorage(THEME_LS_KEY) || "dark";

    if (theme === "light") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
    } else {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
    }
}