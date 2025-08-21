export default function makeMarkup(arr) {

    return arr.map(({ title, description, id }) =>
        `<li class="task-list-item" data-id="${id}">
            <button class="task-list-item-btn">Delete</button>
            <h3 class="task-list-item-title">${title}</h3>
            <p class="task-list-item-description">${description}</p>
        </li>`).join('');
}
