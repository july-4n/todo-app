import {getModalData, renderModal} from './modules/modal.js';
import {renderPage} from './modules/render.js';

const init = () => {
  const body = document.querySelector('body');
  const modal = renderModal(body);
  const {list, form} = renderPage();

  getModalData(modal, list, form);
};

init();
