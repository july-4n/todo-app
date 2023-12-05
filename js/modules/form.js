import {getStorage, addTaskStorage} from './storage.js';
import {createRow} from './create.js';

const removeDisabledBtn = form => {
  form.addEventListener('input', evt => {
    const input = evt.target.classList.contains('form-control');
    if (input && input.value !== null) {
      const btn = form.querySelector('.btn-primary');
      btn.removeAttribute('disabled');
    }
  });
};

const addDisabledBtn = form => {
  form.addEventListener('click', evt => {
    const btnWarning = evt.target.classList.contains('btn-warning');
    if (btnWarning) {
      const btnPrimary = form.querySelector('.btn-primary');
      btnPrimary.setAttribute('disabled', '');
    }
  });
};

const addTaskPage = (task, list, i) => {
  list.append(createRow(task, i));
};

const formControl = (form, list, name) => {
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newTask = {
      id: Date.now(),
      task: formData.get('task'),
      done: false,
    };

    const length = getStorage(name).length;

    addTaskPage(newTask, list, length + 1);
    addTaskStorage(newTask, name);

    form.reset();
    const btn = form.querySelector('.btn-primary');
    btn.setAttribute('disabled', '');
  });
};

export {
  removeDisabledBtn,
  formControl,
  addDisabledBtn,
};
