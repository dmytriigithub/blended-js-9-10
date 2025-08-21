import { nanoid } from 'nanoid'

import { getFromLocalStorage, saveToLocalStorage } from './local-storage-api';
import renderTasks from './render-tasks';
import { TASK_LS_KEY } from './local-storage-api';


export function handlerAdd(event) {
    event.preventDefault();
    const form = event.target;

    const taskName = form.elements.taskName.value.trim();
    const taskDescription = form.elements.taskDescription.value.trim();

    if (!taskName || !taskDescription) {
        alert('Fill on all fields');
        return;
    }

    const task = {
        title: taskName,
        description: taskDescription,
        id: nanoid()
    };

    const existingTasks = getFromLocalStorage(TASK_LS_KEY) || [];
    existingTasks.push(task);
    saveToLocalStorage(TASK_LS_KEY, existingTasks);
    renderTasks(existingTasks);

    form.reset();

}


export function handlerRemove(event) {
    if (!event.target.classList.contains("task-list-item-btn")) {
        return;
    }

    const listItem = event.target.closest(".task-list-item");

    const taskId = listItem.dataset.id;
    const updatedData = getFromLocalStorage(TASK_LS_KEY).filter(({ id }) => id !== taskId);


    saveToLocalStorage(TASK_LS_KEY, updatedData);
    renderTasks(updatedData);
}