const body = document.querySelector('#body');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.modal__close-btn');
const applyButtons = document.querySelectorAll('.apply-btn');
const applicationForm = document.querySelector('#application-form');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formComment = document.querySelector('#comment');
let creditInfo = '';

applyButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const row = e.currentTarget.closest('tr');
    const cells = row.querySelectorAll('td');
    const creditName = cells[0].textContent;
    const rate = cells[1].textContent;
    const term = cells[2].textContent;
    creditInfo = `Название кредита: ${creditName} - Ставка кредита: ${rate}% - Срок кредита: ${term} лет`;
    body.style.overflowY = 'hidden';
    modal.style.display = 'flex';
  });
});

const closeModal = () => {
  formName.value = '';
  formEmail.value = '';
  formComment.value = '';
  creditInfo = '';
  modal.style.display = 'none';
  body.style.overflowY = 'auto';
};

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

applicationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(`Имя: ${formName.value}, \nКонтактная информация (email): ${formName.value}, \nКомментарий: ${formName.value}`);

  fetch('./apply.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'name': formName.value,
      'email': formName.value,
      'comment': formName.value,
      'creditInfo': creditInfo,
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        console.log(data.message.split('-').join('\n'));
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });

  closeModal();
});