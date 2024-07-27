<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $comment = $_POST['comment'] ?? '';
    $creditInfo = $_POST['creditInfo'] ?? '';

    if (!is_dir('./data')) {
        mkdir('./data', 0777, true);
    }

    $filename = './data/applications.txt';

    $data = date('Y.m.d H:i:s') . " - Имя: $name - Контактная информация (email): $email - Комментарий: $comment - $creditInfo\n";

    if (file_put_contents($filename, $data, FILE_APPEND)) {
        echo json_encode(['status' => 'success', 'message' => "Данные получены и сохранены - $data"]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Не удалось сохранить данные в файл']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Неправильный метод запроса']);
}
?>