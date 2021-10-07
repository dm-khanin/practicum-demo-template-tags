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
const todoTemplate = document.querySelector('#todo-item-template').content;

const renderTodo = (taskName) => {
  const todoElement = todoTemplate.cloneNode(true);
  const todoTextElement = todoElement.querySelector('.todo-item__text');
  todoTextElement.textContent = taskName;

  todosContainer.append(todoElement);
};

todos.forEach(renderTodo);
