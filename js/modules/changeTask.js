import {removeStorage, editStorage} from "./storage.js";

const getNumberRow = (list) => {
  const rows = list.querySelectorAll('tbody > tr');
  let i = 0;
  rows.forEach(row => {
    row.querySelectorAll('td')[0].textContent = ++i;
  });
};


const deleteTask = (list, name) => {
  list.addEventListener('click', ({target}) => {
    if (target.classList.contains('btn-danger')) {
      const confirmQuestion = confirm('Вы хотите удалить задачу?');
      if (confirmQuestion) {
        const row = target.closest('tr').querySelector('.task');
        const taskId = row.id;
        target.closest('tr').remove();
        removeStorage(taskId, name);
        getNumberRow(list, name);
      }
    }
  });
};

const solveTask = (list, name) => {
  list.addEventListener('click', ({target}) => {
    if (target.classList.contains('btn-success')) {
      const row = target.closest('tr');
      row.classList.remove('table-light');
      row.classList.add('table-success');
      const task = row.querySelector('.task');
      const taskId = parseInt(task.id);
      task.classList.add('text-decoration-line-through');
      const taskStatus = row.querySelector('.task-status');
      taskStatus.textContent = 'Выполнена';
      editStorage(name, taskId, 'done', true);
    }
  });
};

export {
  deleteTask,
  solveTask,
};
