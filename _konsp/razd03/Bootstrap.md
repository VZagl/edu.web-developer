# Bootstrap

> [Изучался в `032. Библиотека Bootstrap 4`](../razd02/032.%20Библиотека%20Bootstrap%204.md)

## Введение в Bootstrap

Bootstrap — это популярный CSS-фреймворк с открытым исходным кодом для разработки адаптивных и ориентированных на мобильные устройства веб-сайтов. Он предоставляет готовые компоненты, утилиты и систему сетки, упрощающие процесс веб-разработки.

### Основные особенности

- **Адаптивная система сетки**: 12-колоночная сетка для создания гибких и адаптивных дизайнов.
- **Предварительно стилизованные компоненты**: Кнопки, модальные окна, навигационные панели, формы и многое другое.
- **Настраиваемость**: Легко настраивается с помощью переменных Sass или кастомизатора Bootstrap.
- **Кроссбраузерная совместимость**: Работает без проблем в современных браузерах.
- **JavaScript-плагины**: Включает интерактивные компоненты на основе JavaScript.

## Начало работы

1. **Подключение Bootstrap**:

   - Используйте CDN:
     ```html
     <link
     	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
     	rel="stylesheet"
     />
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
     ```
   - Или установите через npm:
     ```bash
     npm install bootstrap
     ```

2. **Базовая структура**:
   ```html
   <!DOCTYPE html>
   <html lang="ru">
   	<head>
   		<meta charset="UTF-8" />
   		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
   		<title>Пример Bootstrap</title>
   		<link
   			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
   			rel="stylesheet"
   		/>
   	</head>
   	<body>
   		<div class="container">
   			<h1 class="text-center">Привет, Bootstrap!</h1>
   		</div>
   		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   	</body>
   </html>
   ```

## Основные концепции

### Система сетки

Система сетки Bootstrap основана на строках и колонках:

```html
<div class="container">
	<div class="row">
		<div class="col-md-6">Колонка 1</div>
		<div class="col-md-6">Колонка 2</div>
	</div>
</div>
```

### Компоненты

- **Навигационная панель (Navbar)**:

  ```html
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  	<a class="navbar-brand" href="#">Бренд</a>
  	<button
  		class="navbar-toggler"
  		type="button"
  		data-bs-toggle="collapse"
  		data-bs-target="#navbarNav"
  	>
  		<span class="navbar-toggler-icon"></span>
  	</button>
  	<div class="collapse navbar-collapse" id="navbarNav">
  		<ul class="navbar-nav">
  			<li class="nav-item"><a class="nav-link" href="#">Главная</a></li>
  			<li class="nav-item"><a class="nav-link" href="#">Функции</a></li>
  		</ul>
  	</div>
  </nav>
  ```

- **Кнопка**:

  ```html
  <button class="btn btn-primary">Нажми меня</button>
  ```

- **Карточка**:

  ```html
  <div class="card" style="width: 18rem;">
  	<img class="card-img-top" src="image.jpg" alt="..." />
  	<div class="card-body">
  		<h5 class="card-title">Заголовок карточки</h5>
  		<p class="card-text">Описание карточки.</p>
  		<a class="btn btn-primary" href="#">Подробнее</a>
  	</div>
  </div>
  ```

## Что нового в Bootstrap 5?

Bootstrap 5 включает множество улучшений и новых возможностей:

- **Отказ от jQuery**: Теперь все JavaScript-компоненты работают на чистом JavaScript.
- **Поддержка CSS Custom Properties**: Использование CSS-переменных для большей гибкости.
- **Новая система утилит**: Упрощённая настройка стилей с помощью утилитарных классов.
- **Улучшенная типографика**: Новые шрифты и улучшенные стили текста.
- **Поддержка RTL**: Встроенная поддержка для языков с направлением текста справа налево.

### Пример использования утилитарных классов

```html
<div
	class="d-flex justify-content-center align-items-center"
	style="height: 100vh;"
>
	<div class="p-3 bg-primary text-white rounded">Центрированный блок</div>
</div>
```

### Пример адаптивного дизайна

```html
<div class="container">
	<div class="row">
		<div class="col-12 col-md-8">Основной контент</div>
		<div class="col-12 col-md-4">Боковая панель</div>
	</div>
</div>
```

Для более подробной информации ознакомьтесь с [официальной документацией](https://getbootstrap.com/docs/5.3/).

- [Bootstrap](https://getbootstrap.com/)
