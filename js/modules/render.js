import {getContainer,
  createTitle,
  createLabel,
  createForm,
  createTable,
  createRow,
} from './create.js';

import {getStorage} from './storage.js';

const renderPage = () => {
  const container = getContainer();

  const title = createTitle();
  const form = createForm();
  const label = createLabel();
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');
  const table = createTable();

  form.prepend(label);
  tableWrapper.append(table);

  container.append(title, form, tableWrapper);

  return {
    list: table.tbody,
    form,
  };
};

const renderTasks = (list, name) => {
  let counter = 0;
  const allRow = getStorage(name).map(item => createRow(item, ++counter));

  list.append(...allRow);
  return allRow;
};

export {
  renderPage,
  renderTasks,
};
