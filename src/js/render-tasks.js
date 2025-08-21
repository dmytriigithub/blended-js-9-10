import makeMarkup from './markup-tasks';
import { tasksList } from './refs';

export default function renderTasks(data) {
    tasksList.innerHTML = makeMarkup(data);
}