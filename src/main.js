import { submitHandler } from './js/submitHandler';
import { onLoadMoreBtn } from './js/onLoadMoreBtn';
import { refs } from './js/refs';

refs.form.addEventListener('submit', submitHandler);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);
