import { showMessage } from './showMessage';
import { refs } from './refs';

export async function getGalleryData(queryValue) {
  try {
    const searchParams = new URLSearchParams({
      key: refs.API_KEY,
      q: queryValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });

    const response = await fetch(
      refs.BASE_URL + searchParams,
      refs.options
    ).then();
    if (!response.ok) {
      showMessage(refs.message.error, refs.color.orange);
      return;
    }
    return await response.json();
  } catch (err) {
    showMessage(`${refs.message.exception} ERROR:  ${err}`, refs.color.orange);
  }
}
