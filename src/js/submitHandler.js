import iziToast from 'izitoast';

import { showMessage } from './showMessage';

import { renderAPI } from './render-functions';

import { refs } from './refs';

export async function submitHandler(event) {
  try {
    event.preventDefault();

    const target = event.target;
    const search = target.elements.search.value.trim();
    refs.eventType = 'submit';
    refs.loadMoreBtn.classList.remove('visible');

    iziToast.destroy();

    if (refs.queryString !== search || refs.eventType === 'submit') {
      refs.gallery.innerHTML = '';
      refs.queryString = target.elements.search.value.trim();
      refs.currentPage = 1;
    }

    if (!search.trim()) {
      showMessage(refs.message.info, refs.color.blue);
      refs.gallery.innerHTML = '';
      return;
    }

    await renderAPI.renderGallery(refs.queryString, refs.currentPage);
    target.reset();
  } catch (error) {
    showMessage(refs.message.exception + error, refs.color.red);
    refs.gallery.innerHTML = '';
  }
}
