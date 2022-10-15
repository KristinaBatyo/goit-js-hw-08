import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const name = form.querySelector('input');
const message = form.querySelector('textarea');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputChanges, 500));

onPageReload();

function onInputChanges() {
    const email = name.value;
    const message = message.value;

    const formData = {
        email,
        message,
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
};


function onFormSubmit(e) {
    e.preventDefault();
  
    const formData = {
      email: e.currentTarget.elements.email.value,
      message: e.currentTarget.elements.message.value,
    };
  
    console.log('onFormSubmit : formData', formData);
  
    e.currentTarget.reset();
  
    localStorage.removeItem(LOCAL_KEY);
  }


function onPageReload() {
  const savedData = localStorage.getItem(LOCAL_KEY);
  const parsedData = JSON.parse(savedData);

  if (parsedData) {
    nameEl.value = parsedData.email;
    messageEl.value = parsedData.message;
  }
}