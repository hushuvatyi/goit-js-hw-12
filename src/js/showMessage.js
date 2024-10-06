import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showMessage(message, color) {
  iziToast.info({
    message: `${message}`,
    position: 'topRight',
    backgroundColor: `${color}`,
  });
}
