import { taskForm, tasksList, themeBtn } from "./js/refs";
import { handlerAdd, handlerRemove } from "./js/tasks";
import { getFromLocalStorage } from "./js/local-storage-api";
import renderTasks from "./js/render-tasks";
import { handlerToggleTheme, loadTheme } from "./js/theme-switcher";
import { TASK_LS_KEY } from "./js/local-storage-api";

renderTasks(getFromLocalStorage(TASK_LS_KEY) || []);
document.addEventListener("DOMContentLoaded", loadTheme);


taskForm.addEventListener('submit', handlerAdd);
tasksList.addEventListener('click', handlerRemove);
themeBtn.addEventListener('click', handlerToggleTheme);