const openModal = document.querySelector('.contacts__button');
const feedbackPopup = document.querySelector('.feedback__overlay');
const closeModal = feedbackPopup.querySelector('.feedback__close');
const feedbackForm = feedbackPopup.querySelector('.feedback__form');
const name = feedbackForm.querySelector('.feedback__text--name');
const email = feedbackForm.querySelector('.feedback__text--email');
const textarea = feedbackForm.querySelector('.feedback__textarea');
let text = feedbackForm.querySelectorAll('.feedback__text');

let isStorageSupport = true;
let nameStorage = '';
let emailStorage = '';

try {
  nameStorage = localStorage.getItem('name');
  emailStorage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

openModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('feedback--active');

  if (nameStorage && emailStorage) {
    name.value = nameStorage;
    email.value = emailStorage;
    setTimeout(() => {
      textarea.focus();
    }, 800);
  } else if (nameStorage) {
    name.value = nameStorage;
    setTimeout(() => {
      email.focus();
    }, 800);
  } else {
    setTimeout(() => {
      name.focus();
    }, 800);
  }
});

closeModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('feedback--active');
  feedbackPopup.classList.remove('feedback-error"');
  name.classList.remove('feedback__text--error');
  email.classList.remove('feedback__text--error');
  textarea.classList.remove('feedback__text--error');
});

feedbackForm.addEventListener('submit', function(evt) {
  if (!name.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove('feedback-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('feedback-error');
    name.classList.add('feedback__text--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
    }
  }
});

feedbackForm.addEventListener('submit', function(evt) {
  if (!email.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove('feedback-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('feedback-error');
    email.classList.add('feedback__text--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('email', email.value);
    }
  }
});

feedbackForm.addEventListener('submit', function(evt) {
  if (textarea.value == null ||
    textarea.value.length == '') {
    evt.preventDefault();
    feedbackPopup.classList.remove('feedback-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('feedback-error');
    textarea.classList.add('feedback__text--error');
  }
});

feedbackPopup.addEventListener('click', function(evt) {
  if (!evt.target.closest('.feedback')) {
    feedbackPopup.classList.remove('feedback--active');
    name.classList.remove('feedback__text--error');
    email.classList.remove('feedback__text--error');
    textarea.classList.remove('feedback__text--error');
    feedbackPopup.classList.remove('feedback-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('feedback--active')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('feedback--active');
      name.classList.remove('feedback__text--error');
      email.classList.remove('feedback__text--error');
      textarea.classList.remove('feedback__text--error');
      feedbackPopup.classList.remove('feedback-error');
    }
  }
});
