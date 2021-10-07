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
const addTodoForm = document.querySelector('.todo-form');

const renderTodo = (taskName) => {
  const todoElement = todoTemplate.cloneNode(true);
  const todoTextElement = todoElement.querySelector('.todo-item__text');
  todoTextElement.textContent = taskName;

  todosContainer.append(todoElement);
};

todos.forEach(renderTodo);

const addTodo = (event) => {
  event.preventDefault();

  const input = event.target.querySelector('.todo-form__input');
  const taskName = input.value;

  renderTodo(taskName);

  input.value = '';
};

addTodoForm.addEventListener('submit', addTodo);
