// Получаем элементы DOM для дальнейшего использования
const body = document.querySelector('#body');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.modal__close-btn');
const applyButtons = document.querySelectorAll('.apply-btn');
const applicationForm = document.querySelector('#application-form');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formComment = document.querySelector('#comment');
let creditInfo = '';

// Добавляем обработчик событий на каждую кнопку "apply"
applyButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Находим строку таблицы, содержащую нажатую кнопку
    const row = e.currentTarget.closest('tr');
    // Извлекаем данные из ячеек строки
    const cells = row.querySelectorAll('td');
    const creditName = cells[0].textContent;
    const rate = cells[1].textContent;
    const term = cells[2].textContent;
    // Формируем строку с информацией о кредите
    creditInfo = `Название кредита: ${creditName} - Ставка кредита: ${rate}% - Срок кредита: ${term} лет`;
    // Отключаем прокрутку страницы и отображаем модальное окно
    body.style.overflowY = 'hidden';
    modal.style.display = 'flex';
  });
});

// Функция для закрытия модального окна и очистки полей формы
const closeModal = () => {
  formName.value = '';
  formEmail.value = '';
  formComment.value = '';
  creditInfo = '';
  modal.style.display = 'none';
  body.style.overflowY = 'auto';
};

// Добавляем обработчик события клика на кнопку закрытия модального окна
closeBtn.addEventListener('click', closeModal);

// Закрываем модальное окно при клике вне его
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Добавляем обработчик события отправки формы
applicationForm.addEventListener('submit', (event) => {
  // Отменяем стандартное поведение отправки формы
  event.preventDefault();
  // Выводим данные формы в консоль
  console.log(`Имя: ${formName.value}, \nКонтактная информация (email): ${formEmail.value}, \nКомментарий: ${formComment.value}`);

  // Отправляем данные формы на сервер
  fetch('./apply.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'name': formName.value,
      'email': formEmail.value,
      'comment': formComment.value,
      'creditInfo': creditInfo,
    }),
  })
    // Обрабатываем ответ от сервера
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        console.log(data.message.split('-').join('\n'));
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });

  // Закрываем модальное окно после отправки формы
  closeModal();
});