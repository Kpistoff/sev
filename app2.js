const express = require('express');
const app = express();

// Обработка GET-запроса по корневому пути
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

// Запуск сервера на порту 80
const server = app.listen(80, () => {
  console.log('Сервер запущен на порту 80');
});
