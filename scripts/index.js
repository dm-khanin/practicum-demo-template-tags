const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const todosContainer = document.querySelector('.todos__list');

const renderTodo = (taskName) => {
  return `
    <li class="todo-item">
      <span class="todo-item__text">${taskName}</span>
      <button class="todo-item__edit"></button>
      <button class="todo-item__copy"></button>
      <button class="todo-item__del"></button>
    </li>
  `;
};

todosContainer.innerHTML = todos.map(renderTodo).join('');
