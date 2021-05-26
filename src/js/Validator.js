import luhnValidate from './functions/luhnValidate';
import checkPaySystem from './functions/checkPaySystem';
import checkInputValue from './functions/checkInputValue';

export default class Validator {
  constructor() {
    this.form = document.querySelector('.validate-form');
    [...this.form.querySelectorAll('.card-image-wrapper')].forEach((card) => {
      card.addEventListener('click', (e) => this.onCardClick(e));
    });
    this.form.addEventListener('submit', (e) => this.onSubmit(e));
  }

  onCardClick(e) {
    e.preventDefault();
    [...this.form.querySelectorAll('.card-image-wrapper')]
      .find((elem) => elem.classList.contains('active')).classList.remove('active');
    e.currentTarget.classList.add('active');
  }

  onSubmit(e) {
    e.preventDefault();
    const card = this.form.querySelector('.active').getAttribute('data-card');

    if (this.form.querySelector('.input').value === '') {
      this.showError('Заполните поле');
      return;
    }

    if (checkInputValue(this.form.querySelector('.input').value) === false) {
      this.showError('Введите корректные данные!');
      return;
    }

    const inputValue = this.form.querySelector('.input').value.match(/\d/g).join('');

    if (checkPaySystem(card, inputValue) === false) {
      this.showError(`Неправильный формат платежной системы ${card}!`);
      return;
    }

    if (luhnValidate(inputValue)) this.showValid('Карта валидна!');
    else this.showError('Карта не валидна!');
  }

  showValid(message) {
    this.form.querySelector('.success-block').style.display = 'block';
    this.form.querySelector('.success-block').textContent = message;
    setTimeout(() => {
      this.form.querySelector('.success-block').style.display = 'none';
      this.form.querySelector('.input').value = '';
    }, 5000);
  }

  showError(message) {
    this.form.querySelector('.input').value = '';
    this.form.querySelector('.alert-block').style.display = 'block';
    this.form.querySelector('.alert-block').textContent = message;
    setTimeout(() => {
      this.form.querySelector('.alert-block').style.display = 'none';
    }, 5000);
  }
}
