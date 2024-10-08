import { refs } from './refs';
import { showMessage } from './showMessage';
import { renderAPI } from './render-functions';

export async function onLoadMoreBtn(event) {
  try {
    refs.eventType = 'click';
    await renderAPI.renderGallery(refs.queryString, refs.currentPage);
    const liEl = document.querySelector('li');
    const { height } = liEl.getBoundingClientRect();
    renderAPI.scrollVertical(height * 2, 0);
  } catch (error) {
    showMessage(refs.message.exception + error + 1, refs.color.red);
    //   showMessage(refs.message.exception + error, refs.color.red);
  }
}
