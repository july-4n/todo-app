
const getContainer = () => {
  const container = document.querySelector('.app-container');
  // eslint-disable-next-line max-len
  container.classList.add('vh-100','w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');
  return container;
};

const createTitle = () => {
  const title = document.createElement('h1');
  title.textContent = "Todo App";
  return title;
};

const createLabel = () => {
  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');
  const input = document.createElement('input');
  input.classList.add('form-control');
  input.type = 'text';
  input.name = 'task';
  input.placeholder = 'ввести задачу';
  label.input = input;

  label.append(input);

  return label;
};

const createBtns = (params) => {
  const btns = params.map(({className, type, text, disabled}) => {
    const button = document.createElement('button');
    button.className = className;
    button.type = type;
    button.textContent = text;
    disabled ? button.setAttribute(disabled, '') : false;

    return button;
  });
  return btns;
};

const btnsHeadGroup = createBtns([
  {
    className: 'btn btn-primary me-3',
    type: 'submit',
    text: 'Сохранить',
    disabled: 'disabled',
  },
  {
    className: 'btn btn-warning',
    type: 'reset',
    text: 'Очистить',
  },
]);

const createTh = params => {
  const elem = params.map(({text}) => {
    const th = document.createElement('th');
    if (text) {
      th.textContent = text;
    }
    return th;
  });
  return elem;
};

const createThRow = createTh([
  {
    text: '№',
  },
  {
    text: 'Задача',
  },
  {
    text: 'Статус',
  },
  {
    text: 'Действия',
  },
]);

const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  form.append(...btnsHeadGroup);

  return form;
};

const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  table.style.minWidth = '473px';
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');

  const tbody = document.createElement('tbody');

  tr.append(...createThRow);
  thead.append(tr);
  table.append(thead, tbody);
  table.tbody = tbody;

  return table;
};

const createRow = ({id, task, done}, i) => {
  const tr = document.createElement('tr');

  const tdNumber = document.createElement('td');
  tdNumber.classList.add('cell-number');
  tdNumber.textContent = i;

  const tdTask = document.createElement('td');
  tdTask.classList.add('task');
  tdTask.textContent = task;
  tdTask.id = id;

  const tdStatus = document.createElement('td');
  tdStatus.classList.add('task-status');

  if (done === false) {
    tr.classList.add('table-light');
    tdStatus.textContent = 'В процессе';
  } else {
    tr.classList.add('table-success');
    tdStatus.textContent = 'Выполнена';
    tdTask.classList.add('text-decoration-line-through');
  }


  const tdButtons = document.createElement('td');
  const btnsGroup = createBtns([
    {
      className: 'btn btn-danger me-3',
      type: 'button',
      text: 'Удалить',
    },
    {
      className: 'btn btn-success',
      type: 'button',
      text: 'Завершить',
    },
  ]);

  tdButtons.append(...btnsGroup);
  tr.append(tdNumber, tdTask, tdStatus, tdButtons);

  return tr;
};

export {
  getContainer,
  createTitle,
  createLabel,
  createBtns,
  createForm,
  createTable,
  createRow,
};
