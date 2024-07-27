<?php
// Проверяем, что запрос сделан методом POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем данные из POST-запроса, если их нет, то присваиваем пустую строку
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $comment = $_POST['comment'] ?? '';
    $creditInfo = $_POST['creditInfo'] ?? '';

    // Проверяем, существует ли директория 'data', если нет - создаем ее
    if (!is_dir('./data')) {
        mkdir('./data', 0777, true);
    }

    // Определяем имя файла для сохранения данных
    $filename = './data/applications.txt';

    // Формируем строку данных для записи в файл
    $data = date('Y.m.d H:i:s') . " - Имя: $name - Контактная информация (email): $email - Комментарий: $comment - $creditInfo\n";

    // Пытаемся записать данные в файл, если успешно - возвращаем ответ с успехом, иначе - с ошибкой
    if (file_put_contents($filename, $data, FILE_APPEND)) {
        echo json_encode(['status' => 'success', 'message' => "Данные получены и сохранены - $data"]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Не удалось сохранить данные в файл']);
    }
} else {
    // Если запрос не методом POST, возвращаем сообщение об ошибке
    echo json_encode(['status' => 'error', 'message' => 'Неправильный метод запроса']);
}
?>