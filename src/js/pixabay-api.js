import axios from 'axios';
import { showMessage } from './showMessage';
import { refs } from './refs';
import { renderAPI } from './render-functions';

export async function getGalleryData(queryValue, page) {
  try {
    renderAPI.fetchLoader();
    refs.config.params.key = refs.API_KEY;
    refs.config.params.q = queryValue;
    refs.config.params.page = page;

    const response = await axios.get(refs.BASE_URL, refs.config);
    return response.data;
  } catch (err) {
    showMessage(
      `${refs.message.exception} ERROR: ${err.message}` + 2,
      refs.color.red
    );
  }
}
