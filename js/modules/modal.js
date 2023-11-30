import {renderTasks} from "./render.js";
import {deleteTask, solveTask} from "./changeTask.js";
import {formControl,
  removeDisabledBtn,
  addDisabledBtn} from './form.js';

const createModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal', 'is-visible');

  modal.insertAdjacentHTML('beforeend', `
    <div class='modal__wrapper'>
      <div class='modal__overlay'>
        <div class='modal__content'>
          <form>
            <div class='modal__group'>
              <label class='modal__label' for='name'> Введите ваше имя:</label>
              <input class='modal__input' name='name'
                id ='name' type='text' required>
            </div>
            <div class='modal__btn'>
              <button class='btn btn-success' type='submit'>Сохранить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `);

  return modal;
};

const closeModal = modal => {
  modal.classList.remove('is-visible');
};

const renderModal = (body) => {
  const modal = createModal();
  body.append(modal);
  return modal;
};


const getModalData = (modal, list, form) => {
  modal.addEventListener('submit', evt => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const {name} = Object.fromEntries(data);

    closeModal(modal);

    renderTasks(list, name);
    removeDisabledBtn(form);
    addDisabledBtn(form);

    formControl(form, list, name);
    deleteTask(list, name);
    solveTask(list, name);
  });
};

export {
  createModal,
  getModalData,
  renderModal,
};
