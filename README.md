# Проект "Банковские кредиты"

## Описание

Простая веб-страница, содержащая таблицу с информацией о банковских кредитах и возможность оформления заявки. Проект включает в себя фронтенд и бекенд часть, с использованием HTML, CSS, JavaScript и PHP.

## Использованные технологии

- HTML5
- CSS3
- SASS
- JavaScript (ES6+)
- PHP
- Fetch API для AJAX-запросов
- Docker

## Требования

Для запуска проекта необходимо:

- [Node.js](https://nodejs.org/) (включая npm)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Запуск проекта

### С использованием Docker

1. Убедитесь, что у вас установлены [Node.js](https://nodejs.org/), [Docker](https://www.docker.com/get-started) и [Docker Compose](https://docs.docker.com/compose/install/).

2. Склонируйте репозиторий:
   ```sh
   git clone https://github.com/hell-llex/myfin-test.git
   ```

3. Перейдите в директорию проекта:
   ```sh
   cd myfin-test
   ```

4. Убедитесь, что Docker запущен.

5. Соберите и запустите контейнеры:
   ```sh
   npm start
   ```

6. Откройте браузер и перейдите по адресу `http://localhost:8000`, чтобы увидеть работу проекта.

### Без использования Docker

1. Склонируйте репозиторий:
   ```sh
   git clone https://github.com/hell-llex/myfin-test.git
   ```

2. Перейдите в директорию проекта:
   ```sh
   cd myfin-test
   ```

3. Запуск с использованием Live Server:
   1. Установите расширение [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) для Visual Studio Code.
   2. Откройте проект в Visual Studio Code.
   3. Кликните правой кнопкой мыши на `index.html` и выберите `Open with Live Server`.

4. Запуск без использования Live Server:
   1. Откройте файл `index.html` в браузере.

## Инструкция по использованию

1. Нажмите на кнопку "Оформить заявку" напротив выбранного кредита.
2. Введите имя и контактную информацию в появившейся форме.
3. Нажмите кнопку "Отправить", чтобы отправить данные заявки.

## Автор
Александр Демещенко