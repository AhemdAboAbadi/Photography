const inputName = document.getElementById('name-id').values;
const inputEmail = document.getElementById('email-id').values;
const inputPhone = document.getElementById('phone-id').values;
const inputCity = document.getElementById('city-id').values;
const inputCountry = document.getElementById('country-id').values;
const inputMessage = document.getElementById('message-id').values;
const btnٍSubmit = document.querySelector('.btn-submit').values;

btnٍSubmit.addEventListener('click', () => {
  console.log(inputName);
  console.log(inputEmail);
  console.log(inputPhone);
  console.log(inputCity);
  console.log(inputCountry);
  console.log(inputMessage);
});
