import { refs } from './refs';
import { showMessage } from './showMessage';
import { getGalleryData } from './pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function fetchGallery(data) {
  refs.gallery.insertAdjacentHTML('beforeend', markup(data));

  lightbox.refresh();
}

function markup(data) {
  return data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
				<li class="gallery-item hvr-grow">
					<a class="gallery-link" href="${largeImageURL}">
						<figure class="gallery-figure ">
							<img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy">
							<figcaption class="gallery-figcaption">
								<ul class="img-content-wrapper">
									<li>Likes<span>${likes}</span></li>
									<li>Views<span>${views}</span></li>
									<li>Comments<span>${comments}</span></li>
									<li>Downloads<span>${downloads}</span></li>
								</ul>
							</figcaption>
						</figure>
					</a>
				</li>
		`
    )
    .join('');
}

async function renderGallery(searchValue, page) {
  try {
    if (searchValue === refs.queryString && refs.eventType === 'click') {
      refs.currentPage += 1;
      page += 1;
    }

    const galleryData = await getGalleryData(searchValue, page);

    removeLoader();

    if (validateGalleryData(galleryData)) {
      const restOfImages = Math.round(galleryData.totalHits / page);
      fetchGallery(galleryData);
      showHideBtn(restOfImages);
    }
  } catch (error) {
    showMessage(refs.message.exception + error + 3, refs.color.red);
  }
}

function validateGalleryData(galleryData) {
  if (!galleryData) {
    gallery.innerHTML = '';
    return false;
  } else if (galleryData && galleryData.totalHits === 0) {
    showMessage(refs.message.warning, refs.color.blue);
    refs.gallery.innerHTML = '';
    return false;
  } else {
    return true;
  }
}

function scrollVertical(x = 0, y = 0) {
  window.scrollBy({ top: x, left: y, behavior: 'smooth' });
}

function removeLoader() {
  const loaderWrapper = document.querySelector('.loader-wrapper');

  loaderWrapper.remove();
}

function showHideBtn(imagesCount) {
  if (imagesCount <= refs.config.params.per_page) {
    refs.loadMoreBtn.classList.remove('visible');
    showMessage(refs.message.lastPage, refs.color.blue);
    return;
  }
  refs.loadMoreBtn.classList.add('visible');
}

function fetchLoader() {
  refs.gallery.insertAdjacentHTML(
    'beforeend',
    `<div class='loader-wrapper'>
        <div class='loader'></div>
    </div>`
  );
}

export const renderAPI = {
  fetchGallery,
  markup,
  renderGallery,
  validateGalleryData,
  scrollVertical,
  removeLoader,
  showHideBtn,
  fetchLoader,
};
