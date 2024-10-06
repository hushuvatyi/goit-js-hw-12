import iziToast from 'izitoast';

import { showMessage } from './showMessage';

import { getGalleryData } from './pixabay-api';
import { renderGallery } from './render-functions';

import { refs } from './refs';

export async function submitHandler(event) {
  event.preventDefault();

  iziToast.destroy();
  refs.gallery.innerHTML = '';
  addLoader();

  const formData = new FormData(event.target);
  const { search } = Object.fromEntries(formData.entries());

  if (!search.trim()) {
    showMessage(refs.message.info, refs.color.blue);
    refs.gallery.innerHTML = '';
    return;
  }

  try {
    const galleryData = await getGalleryData(search.trim());
    if (validateGalleryData(galleryData)) {
      renderGallery(galleryData, refs.gallery);
    }
  } catch (error) {
    showMessage(refs.message.exception + error, refs.color.orange);
    refs.gallery.innerHTML = '';
  }

  event.target.reset();
}

function addLoader() {
  refs.div.classList.add('loader');
  refs.gallery.append(refs.div);
}

function validateGalleryData(galleryData) {
  if (!galleryData) {
    refs.gallery.innerHTML = '';
    return false;
  } else if (galleryData && galleryData.totalHits === 0) {
    showMessage(message.warning, color.red);
    refs.gallery.innerHTML = '';
    return false;
  } else {
    return true;
  }
}
