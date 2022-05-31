import { refs } from './refs';

export function clearGallery() {
  refs.gallery.innerHTML = '';
  refs.loadMoreBtn.classList.add('visually-hidden');
}
