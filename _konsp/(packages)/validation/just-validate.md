<UPDATED_CODE># JustValidate - Библиотека для валидации форм

# JustValidate - Библиотека для валидации форм

## Содержание

- [JustValidate - Библиотека для валидации форм](#justvalidate---библиотека-для-валидации-форм)
	- [Содержание](#содержание)
	- [Что такое JustValidate?](#что-такое-justvalidate)
		- [Основные преимущества:](#основные-преимущества)
	- [Установка](#установка)
		- [Через CDN:](#через-cdn)
		- [Через npm:](#через-npm)
		- [Через yarn:](#через-yarn)
	- [Базовое использование](#базовое-использование)
		- [HTML разметка:](#html-разметка)
		- [JavaScript инициализация:](#javascript-инициализация)
	- [Встроенные правила валидации](#встроенные-правила-валидации)
		- [Основные правила:](#основные-правила)
		- [Примеры использования:](#примеры-использования)
	- [Кастомные правила валидации](#кастомные-правила-валидации)
		- [Создание собственного правила:](#создание-собственного-правила)
		- [Асинхронная валидация:](#асинхронная-валидация)
	- [Валидация групп полей](#валидация-групп-полей)
		- [Радиокнопки:](#радиокнопки)
		- [Чекбоксы:](#чекбоксы)
	- [Конфигурация и настройки](#конфигурация-и-настройки)
		- [Основные опции:](#основные-опции)
	- [События и коллбэки](#события-и-коллбэки)
		- [Основные события:](#основные-события)
		- [Дополнительные события:](#дополнительные-события)
	- [Стилизация](#стилизация)
		- [CSS для базовых стилей:](#css-для-базовых-стилей)
	- [Практические примеры](#практические-примеры)
		- [Форма регистрации:](#форма-регистрации)
		- [Форма обратной связи:](#форма-обратной-связи)
	- [Интеграция с популярными фреймворками](#интеграция-с-популярными-фреймворками)
		- [React:](#react)
		- [Vue.js:](#vuejs)
	- [Продвинутые техники](#продвинутые-техники)
		- [Условная валидация:](#условная-валидация)
		- [Валидация файлов:](#валидация-файлов)
		- [Валидация с debounce:](#валидация-с-debounce)
	- [Методы API](#методы-api)
		- [Основные методы:](#основные-методы)
		- [Примеры использования методов:](#примеры-использования-методов)
	- [Локализация](#локализация)
		- [Настройка языка:](#настройка-языка)
		- [Мультиязычная поддержка:](#мультиязычная-поддержка)
	- [Интеграция с UI библиотеками](#интеграция-с-ui-библиотеками)
		- [Bootstrap:](#bootstrap)
		- [Material-UI стилизация:](#material-ui-стилизация)
	- [Оптимизация производительности](#оптимизация-производительности)
		- [Ленивая инициализация:](#ленивая-инициализация)
		- [Кэширование валидаторов:](#кэширование-валидаторов)
	- [Тестирование](#тестирование)
		- [Unit тесты с Jest:](#unit-тесты-с-jest)
		- [E2E тесты с Cypress:](#e2e-тесты-с-cypress)
	- [Отладка и диагностика](#отладка-и-диагностика)
		- [Включение режима отладки:](#включение-режима-отладки)
		- [Инструменты разработчика:](#инструменты-разработчика)
	- [Миграция и обновления](#миграция-и-обновления)
		- [Миграция с других библиотек:](#миграция-с-других-библиотек)
		- [Обновление версий:](#обновление-версий)
	- [Лучшие практики](#лучшие-практики)
		- [1. Структура кода:](#1-структура-кода)
		- [2. Переиспользуемые правила:](#2-переиспользуемые-правила)
		- [3. Конфигурация через данные:](#3-конфигурация-через-данные)
	- [Расширенные возможности](#расширенные-возможности)
		- [Создание плагинов:](#создание-плагинов)
		- [Интеграция с аналитикой:](#интеграция-с-аналитикой)
	- [Производительность и оптимизация](#производительность-и-оптимизация)
		- [Виртуализация для больших форм:](#виртуализация-для-больших-форм)
		- [Мемоизация результатов валидации:](#мемоизация-результатов-валидации)
	- [Безопасность](#безопасность)
		- [Защита от XSS:](#защита-от-xss)
		- [Защита от CSRF:](#защита-от-csrf)
	- [Ресурсы:](#ресурсы)
	- [Заключение](#заключение)

---

## Что такое JustValidate?

**JustValidate** — это легковесная JavaScript библиотека для валидации форм без зависимостей. Она предоставляет простой и гибкий способ валидации HTML форм с поддержкой кастомных правил, асинхронной валидации и красивых сообщений об ошибках.

### Основные преимущества:

- 🚀 Легковесная (менее 4KB в сжатом виде)
- 📱 Поддержка мобильных устройств
- 🎨 Кастомизируемые стили и сообщения
- ⚡ Асинхронная валидация
- 🔧 Простая интеграция
- 🌐 Поддержка интернационализации

---

## Установка

### Через CDN:

```html
<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
```

### Через npm:

```bash
npm install just-validate
```

### Через yarn:

```bash
yarn add just-validate
```

---

## Базовое использование

### HTML разметка:

```html
<form class="js-form" id="basic-form">
	<div class="form-group">
		<label for="name">Имя *</label>
		<input id="name" type="text" name="name" data-validate-field="name" />
	</div>

	<div class="form-group">
		<label for="email">Email *</label>
		<input id="email" type="email" name="email" data-validate-field="email" />
	</div>

	<div class="form-group">
		<label for="phone">Телефон</label>
		<input id="phone" type="tel" name="phone" data-validate-field="phone" />
	</div>

	<button type="submit">Отправить</button>
</form>
```

### JavaScript инициализация:

```javascript
const validator = new JustValidate('#basic-form');

validator
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Поле обязательно для заполнения',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа',
		},
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Email обязателен',
		},
		{
			rule: 'email',
			errorMessage: 'Введите корректный email',
		},
	])
	.addField('#phone', [
		{
			rule: 'customRegexp',
			value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
			errorMessage: 'Введите корректный номер телефона',
		},
	])
	.onSuccess((event) => {
		console.log('Форма валидна!', event);
		// Отправка данных
	});
```

---

## Встроенные правила валидации

### Основные правила:

| Правило          | Описание             | Пример                                       |
| ---------------- | -------------------- | -------------------------------------------- |
| `required`       | Обязательное поле    | `{ rule: 'required' }`                       |
| `email`          | Email адрес          | `{ rule: 'email' }`                          |
| `minLength`      | Минимальная длина    | `{ rule: 'minLength', value: 3 }`            |
| `maxLength`      | Максимальная длина   | `{ rule: 'maxLength', value: 50 }`           |
| `password`       | Пароль               | `{ rule: 'password' }`                       |
| `strongPassword` | Сильный пароль       | `{ rule: 'strongPassword' }`                 |
| `number`         | Только числа         | `{ rule: 'number' }`                         |
| `integer`        | Целые числа          | `{ rule: 'integer' }`                        |
| `minNumber`      | Минимальное число    | `{ rule: 'minNumber', value: 18 }`           |
| `maxNumber`      | Максимальное число   | `{ rule: 'maxNumber', value: 100 }`          |
| `customRegexp`   | Регулярное выражение | `{ rule: 'customRegexp', value: /pattern/ }` |

### Примеры использования:

```javascript
validator
	.addField('#password', [
		{
			rule: 'required',
			errorMessage: 'Пароль обязателен',
		},
		{
			rule: 'strongPassword',
			errorMessage:
				'Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и специальные символы',
		},
	])
	.addField('#age', [
		{
			rule: 'required',
			errorMessage: 'Возраст обязателен',
		},
		{
			rule: 'number',
			errorMessage: 'Введите число',
		},
		{
			rule: 'minNumber',
			value: 18,
			errorMessage: 'Минимальный возраст 18 лет',
		},
		{
			rule: 'maxNumber',
			value: 100,
			errorMessage: 'Максимальный возраст 100 лет',
		},
	]);
```

---

## Кастомные правила валидации

### Создание собственного правила:

```javascript
validator.addField('#username', [
	{
		rule: 'required',
		errorMessage: 'Имя пользователя обязательно',
	},
	{
		validator: (value, fields) => {
			// Проверка на уникальность имени пользователя
			return value.length >= 3 && !value.includes(' ');
		},
		errorMessage: 'Имя пользователя должно быть минимум 3 символа без пробелов',
	},
]);
```

### Асинхронная валидация:

```javascript
validator.addField('#email', [
	{
		rule: 'required',
		errorMessage: 'Email обязателен',
	},
	{
		rule: 'email',
		errorMessage: 'Введите корректный email',
	},
	{
		validator: (value, fields) => {
			return new Promise((resolve) => {
				// Имитация проверки на сервере
				setTimeout(() => {
					const isUnique = !['admin@test.com', 'user@test.com'].includes(value);
					resolve(isUnique);
				}, 1000);
			});
		},
		errorMessage: 'Этот email уже используется',
	},
]);
```

---

## Валидация групп полей

### Радиокнопки:

```html
<div class="form-group">
	<label>Пол *</label>
	<input type="radio" name="gender" value="male" data-validate-field="gender" />
	Мужской
	<input
		type="radio"
		name="gender"
		value="female"
		data-validate-field="gender"
	/>
	Женский
</div>
```

```javascript
validator.addRequiredGroup('#gender', 'Выберите пол');
```

### Чекбоксы:

```html
<div class="form-group">
	<input id="terms" type="checkbox" name="terms" data-validate-field="terms" />
	<label for="terms">Согласен с условиями *</label>
</div>
```

```javascript
validator.addField('#terms', [
	{
		rule: 'required',
		errorMessage: 'Необходимо согласиться с условиями',
	},
]);
```

---

## Конфигурация и настройки

### Основные опции:

```javascript
const validator = new JustValidate('#form', {
	// Валидировать при потере фокуса
	validateBeforeSubmitting: true,

	// Показывать ошибки сразу при вводе
	focusInvalidField: true,

	// Прокручивать к невалидному полю
	lockForm: true,

	// Кастомные селекторы
	errorFieldCssClass: 'is-invalid',
	errorFieldStyle: {
		border: '1px solid #ff0000',
	},

	// Кастомные сообщения
	errorLabelCssClass: 'error-label',
	errorLabelStyle: {
		color: '#ff0000',
	},

	// Позиция сообщений об ошибках
	errorsContainer: '.errors-container',

	// Кастомная функция для отображения ошибок
	tooltip: {
		position: 'top',
	},
});
```

---

## События и коллбэки

### Основные события:

```javascript
validator
	.onSuccess((event) => {
		console.log('Форма валидна!');

		// Получение данных формы
		const formData = new FormData(event.target);

		// Отправка на сервер
		fetch('/submit', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Успешно отправлено:', data);
			})
			.catch((error) => {
				console.error('Ошибка:', error);
			});
	})
	.onFail((fields) => {
		console.log('Форма содержит ошибки:', fields);
	})
	.onValidate((isValid, fields) => {
		console.log('Валидация:', isValid, fields);
	});
```

### Дополнительные события:

```javascript
// Событие при изменении поля
validator.addField(
	'#email',
	[
		{
			rule: 'email',
			errorMessage: 'Некорректный email',
		},
	],
	{
		// Коллбэк при изменении поля
		callback: (value, fields) => {
			console.log('Email изменен:', value);
		},
	}
);
```

---

## Стилизация

### CSS для базовых стилей:

```css
/* Стили для полей с ошибками */
.just-validate-error-field {
	border: 1px solid #ff6b6b !important;
	background-color: #ffe0e0;
}

/* Стили для сообщений об ошибках */
.just-validate-error-label {
	display: block;
	margin-top: 5px;
	color: #ff6b6b;
	font-size: 14px;
}

/* Стили для успешной валидации */
.just-validate-success-field {
	border: 1px solid #51cf66 !important;
	background-color: #e0ffe0;
}

/* Анимации */
.just-validate-error-label {
	animation: shake 0.3s ease-in-out;
}

@keyframes shake {
	0%,
	100% {
		transform: translateX(0);
	}
	25% {
		transform: translateX(-5px);
	}
	75% {
		transform: translateX(5px);
	}
}

/* Кастомные стили для разных типов полей */
.form-group {
	position: relative;
	margin-bottom: 20px;
}

.form-group label {
	display: block;
	margin-bottom: 5px;
	font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
	transition: border-color 0.3s ease;
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 10px;
	width: 100%;
	font-size: 16px;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
	outline: none;
	box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	border-color: #007bff;
}
```

---

## Практические примеры

### Форма регистрации:

```html
<form class="registration-form" id="registration-form">
	<div class="form-group">
		<label for="firstName">Имя *</label>
		<input id="firstName" type="text" name="firstName" />
	</div>

	<div class="form-group">
		<label for="lastName">Фамилия *</label>
		<input id="lastName" type="text" name="lastName" />
	</div>

	<div class="form-group">
		<label for="email">Email *</label>
		<input id="email" type="email" name="email" />
	</div>

	<div class="form-group">
		<label for="password">Пароль *</label>
		<input id="password" type="password" name="password" />
	</div>

	<div class="form-group">
		<label for="confirmPassword">Подтвердите пароль *</label>
		<input id="confirmPassword" type="password" name="confirmPassword" />
	</div>

	<div class="form-group">
		<input id="terms" type="checkbox" name="terms" />
		<label for="terms">Согласен с условиями использования *</label>
	</div>

	<button type="submit">Зарегистрироваться</button>
</form>
```

```javascript
const registrationValidator = new JustValidate('#registration-form');

registrationValidator
	.addField('#firstName', [
		{
			rule: 'required',
			errorMessage: 'Имя обязательно',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа',
		},
	])
	.addField('#lastName', [
		{
			rule: 'required',
			errorMessage: 'Фамилия обязательна',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа',
		},
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Email обязателен',
		},
		{
			rule: 'email',
			errorMessage: 'Введите корректный email',
		},
	])
	.addField('#password', [
		{
			rule: 'required',
			errorMessage: 'Пароль обязателен',
		},
		{
			rule: 'strongPassword',
			errorMessage:
				'Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и специальные символы',
		},
	])
	.addField('#confirmPassword', [
		{
			rule: 'required',
			errorMessage: 'Подтвердите пароль',
		},
		{
			validator: (value, fields) => {
				const password =
					fields['#password'] && fields['#password'].elem
						? fields['#password'].elem.value
						: '';
				return value === password;
			},
			errorMessage: 'Пароли не совпадают',
		},
	])
	.addField('#terms', [
		{
			rule: 'required',
			errorMessage: 'Необходимо согласиться с условиями',
		},
	])
	.onSuccess((event) => {
		console.log('Регистрация успешна!');

		const formData = new FormData(event.target);

		// Отправка данных регистрации
		fetch('/api/register', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				alert('Регистрация прошла успешно!');
				window.location.href = '/login';
			})
			.catch((error) => {
				console.error('Ошибка регистрации:', error);
				alert('Произошла ошибка при регистрации');
			});
	});
```

### Форма обратной связи:

```html
<form class="contact-form" id="contact-form">
	<div class="form-group">
		<label for="contactName">Ваше имя *</label>
		<input id="contactName" type="text" name="name" />
	</div>

	<div class="form-group">
		<label for="contactEmail">Email *</label>
		<input id="contactEmail" type="email" name="email" />
	</div>

	<div class="form-group">
		<label for="contactPhone">Телефон</label>
		<input id="contactPhone" type="tel" name="phone" />
	</div>

	<div class="form-group">
		<label for="contactSubject">Тема сообщения *</label>
		<select id="contactSubject" name="subject">
			<option value="">Выберите тему</option>
			<option value="general">Общий вопрос</option>
			<option value="support">Техническая поддержка</option>
			<option value="sales">Продажи</option>
			<option value="partnership">Партнерство</option>
		</select>
	</div>

	<div class="form-group">
		<label for="contactMessage">Сообщение *</label>
		<textarea id="contactMessage" name="message" rows="5"></textarea>
	</div>

	<div class="form-group">
		<input id="contactPrivacy" type="checkbox" name="privacy" />
		<label for="contactPrivacy"
			>Согласен на обработку персональных данных *</label
		>
	</div>

	<button type="submit">Отправить сообщение</button>
</form>
```

```javascript
const contactValidator = new JustValidate('#contact-form');

contactValidator
	.addField('#contactName', [
		{
			rule: 'required',
			errorMessage: 'Введите ваше имя',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Имя должно содержать минимум 2 символа',
		},
	])
	.addField('#contactEmail', [
		{
			rule: 'required',
			errorMessage: 'Email обязателен',
		},
		{
			rule: 'email',
			errorMessage: 'Введите корректный email адрес',
		},
	])
	.addField('#contactPhone', [
		{
			rule: 'customRegexp',
			value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
			errorMessage: 'Введите корректный номер телефона',
		},
	])
	.addField('#contactSubject', [
		{
			rule: 'required',
			errorMessage: 'Выберите тему сообщения',
		},
	])
	.addField('#contactMessage', [
		{
			rule: 'required',
			errorMessage: 'Введите текст сообщения',
		},
		{
			rule: 'minLength',
			value: 10,
			errorMessage: 'Сообщение должно содержать минимум 10 символов',
		},
		{
			rule: 'maxLength',
			value: 1000,
			errorMessage: 'Сообщение не должно превышать 1000 символов',
		},
	])
	.addField('#contactPrivacy', [
		{
			rule: 'required',
			errorMessage: 'Необходимо согласие на обработку данных',
		},
	])
	.onSuccess((event) => {
		const formData = new FormData(event.target);

		// Показать индикатор загрузки
		const submitBtn = event.target.querySelector('button[type="submit"]');
		const originalText = submitBtn.textContent;
		submitBtn.textContent = 'Отправка...';
		submitBtn.disabled = true;

		fetch('/api/contact', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				alert('Сообщение отправлено успешно!');
				event.target.reset();
			})
			.catch((error) => {
				console.error('Ошибка:', error);
				alert('Произошла ошибка при отправке сообщения');
			})
			.finally(() => {
				submitBtn.textContent = originalText;
				submitBtn.disabled = false;
			});
	});
```

---

## Интеграция с популярными фреймворками

### React:

```jsx
import { useEffect, useRef } from 'react';
import JustValidate from 'just-validate';

const ContactForm = () => {
	const formRef = useRef(null);
	const validatorRef = useRef(null);

	useEffect(() => {
		if (formRef.current) {
			validatorRef.current = new JustValidate(formRef.current);

			validatorRef.current
				.addField('#name', [
					{
						rule: 'required',
						errorMessage: 'Имя обязательно',
					},
				])
				.addField('#email', [
					{
						rule: 'required',
						errorMessage: 'Email обязателен',
					},
					{
						rule: 'email',
						errorMessage: 'Введите корректный email',
					},
				])
				.onSuccess((event) => {
					console.log('Форма валидна!');
					// Обработка отправки
				});
		}

		return () => {
			if (validatorRef.current) {
				validatorRef.current.destroy();
			}
		};
	}, []);

	return (
		<form ref={formRef}>
			<input type='text' id='name' name='name' placeholder='Имя' />
			<input type='email' id='email' name='email' placeholder='Email' />
			<button type='submit'>Отправить</button>
		</form>
	);
};
```

### Vue.js:

```vue
<template>
	<form ref="contactForm" @submit.prevent>
		<input id="name" type="text" name="name" placeholder="Имя" />
		<input id="email" type="email" name="email" placeholder="Email" />
		<button type="submit">Отправить</button>
	</form>
</template>

<script>
import JustValidate from 'just-validate';

export default {
	name: 'ContactForm',
	mounted() {
		this.validator = new JustValidate(this.$refs.contactForm);

		this.validator
			.addField('#name', [
				{
					rule: 'required',
					errorMessage: 'Имя обязательно',
				},
			])
			.addField('#email', [
				{
					rule: 'required',
					errorMessage: 'Email обязателен',
				},
				{
					rule: 'email',
					errorMessage: 'Введите корректный email',
				},
			])
			.onSuccess((event) => {
				console.log('Форма валидна!');
				this.handleSubmit(event);
			});
	},
	beforeUnmount() {
		if (this.validator) {
			this.validator.destroy();
		}
	},
	methods: {
		handleSubmit(event) {
			// Обработка отправки формы
			const formData = new FormData(event.target);
			console.log('Данные формы:', Object.fromEntries(formData));
		},
	},
};
</script>
```

---

## Продвинутые техники

### Условная валидация:

```javascript
const validator = new JustValidate('#conditional-form');

validator
	.addField('#userType', [
		{
			rule: 'required',
			errorMessage: 'Выберите тип пользователя',
		},
	])
	.addField('#companyName', [
		{
			validator: (value, fields) => {
				const userType =
					fields['#userType'] && fields['#userType'].elem
						? fields['#userType'].elem.value
						: '';
				// Обязательно только для юридических лиц
				if (userType === 'legal') {
					return value.trim().length > 0;
				}
				return true;
			},
			errorMessage: 'Название компании обязательно для юридических лиц',
		},
	])
	.addField('#inn', [
		{
			validator: (value, fields) => {
				const userType =
					fields['#userType'] && fields['#userType'].elem
						? fields['#userType'].elem.value
						: '';
				if (userType === 'legal') {
					return /^\d{10}$/.test(value);
				}
				return true;
			},
			errorMessage: 'ИНН должен содержать 10 цифр',
		},
	]);
```

### Валидация файлов:

```javascript
validator.addField('#avatar', [
	{
		validator: (value, fields) => {
			const fileInput = fields['#avatar'].elem;
			const file = fileInput.files[0];

			if (!file) return true; // Файл не обязателен

			// Проверка типа файла
			const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
			if (!allowedTypes.includes(file.type)) {
				return false;
			}

			// Проверка размера файла (максимум 2MB)
			const maxSize = 2 * 1024 * 1024;
			if (file.size > maxSize) {
				return false;
			}

			return true;
		},
		errorMessage:
			'Загрузите изображение (JPEG, PNG, GIF) размером не более 2MB',
	},
]);
```

### Валидация с debounce:

```javascript
let debounceTimer;

validator.addField('#username', [
	{
		rule: 'required',
		errorMessage: 'Имя пользователя обязательно',
	},
	{
		validator: (value, fields) => {
			return new Promise((resolve) => {
				clearTimeout(debounceTimer);

				debounceTimer = setTimeout(() => {
					// Проверка доступности имени пользователя
					fetch(`/api/check-username?username=${encodeURIComponent(value)}`)
						.then((response) => response.json())
						.then((data) => {
							resolve(data.available);
						})
						.catch(() => {
							resolve(false);
						});
				}, 500); // Задержка 500ms
			});
		},
		errorMessage: 'Это имя пользователя уже занято',
	},
]);
```

---

## Методы API

### Основные методы:

```javascript
const validator = new JustValidate('#form');

// Добавление поля для валидации
validator.addField(selector, rules, config);

// Добавление группы обязательных полей (радиокнопки, чекбоксы)
validator.addRequiredGroup(selector, errorMessage);

// Удаление поля из валидации
validator.removeField(selector);

// Удаление группы полей
validator.removeGroup(selector);

// Программная валидация формы
validator.validate();

// Сброс валидации
validator.refresh();

// Уничтожение экземпляра валидатора
validator.destroy();

// Получение текущего состояния валидации
const isValid = validator.isValid;

// Получение всех ошибок
const errors = validator.getErrors();
```

### Примеры использования методов:

```javascript
// Динамическое добавление полей
document.getElementById('addField').addEventListener('click', () => {
	const newField = document.createElement('input');
	newField.type = 'text';
	newField.id = 'dynamicField';
	newField.name = 'dynamicField';
	document.getElementById('form').appendChild(newField);

	validator.addField('#dynamicField', [
		{
			rule: 'required',
			errorMessage: 'Это поле обязательно',
		},
	]);
});

// Программная валидация
document.getElementById('validateBtn').addEventListener('click', () => {
	const isValid = validator.validate();
	console.log('Форма валидна:', isValid);
});

// Сброс формы и валидации
document.getElementById('resetBtn').addEventListener('click', () => {
	document.getElementById('form').reset();
	validator.refresh();
});
```

---

## Локализация

### Настройка языка:

```javascript
const validator = new JustValidate('#form', {
	// Кастомные сообщения для разных языков
	messages: {
		required: 'Это поле обязательно для заполнения',
		email: 'Введите корректный email адрес',
		minLength: 'Минимальная длина: {minLength} символов',
		maxLength: 'Максимальная длина: {maxLength} символов',
		password: 'Пароль должен содержать минимум 8 символов',
		strongPassword:
			'Пароль должен содержать заглавные и строчные буквы, цифры и специальные символы',
		number: 'Введите корректное число',
		integer: 'Введите целое число',
		minNumber: 'Минимальное значение: {minNumber}',
		maxNumber: 'Максимальное значение: {maxNumber}',
		customRegexp: 'Значение не соответствует требуемому формату',
	},
});
```

### Мультиязычная поддержка:

```javascript
const messages = {
	ru: {
		required: 'Это поле обязательно для заполнения',
		email: 'Введите корректный email адрес',
		minLength: 'Минимальная длина: {minLength} символов',
		maxLength: 'Максимальная длина: {maxLength} символов',
		password: 'Пароль должен содержать минимум 8 символов',
		phone: 'Введите корректный номер телефона',
	},
	en: {
		required: 'This field is required',
		email: 'Please enter a valid email address',
		minLength: 'Minimum length: {minLength} characters',
		maxLength: 'Maximum length: {maxLength} characters',
		password: 'Password must contain at least 8 characters',
		phone: 'Please enter a valid phone number',
	},
};

const currentLang = document.documentElement.lang || 'ru';

const validator = new JustValidate('#form');

validator
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: messages[currentLang].required,
		},
		{
			rule: 'email',
			errorMessage: messages[currentLang].email,
		},
	])
	.addField('#phone', [
		{
			rule: 'customRegexp',
			value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
			errorMessage: messages[currentLang].phone,
		},
	]);
```

---

## Интеграция с UI библиотеками

### Bootstrap:

```html
<form class="needs-validation" id="bootstrap-form" novalidate>
	<div class="mb-3">
		<label class="form-label" for="name">Имя *</label>
		<input class="form-control" id="name" type="text" name="name" />
		<div class="invalid-feedback"></div>
	</div>

	<div class="mb-3">
		<label class="form-label" for="email">Email *</label>
		<input class="form-control" id="email" type="email" name="email" />
		<div class="invalid-feedback"></div>
	</div>

	<button class="btn btn-primary" type="submit">Отправить</button>
</form>
```

```javascript
const bootstrapValidator = new JustValidate('#bootstrap-form', {
	errorFieldCssClass: 'is-invalid',
	successFieldCssClass: 'is-valid',
	errorLabelCssClass: 'invalid-feedback',
	successLabelCssClass: 'valid-feedback',
});

bootstrapValidator
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Имя обязательно',
		},
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Email обязателен',
		},
		{
			rule: 'email',
			errorMessage: 'Введите корректный email',
		},
	]);
```

### Material-UI стилизация:

```css
/* Стили для Material Design */
.mdc-text-field--invalid .mdc-text-field__input {
	border-bottom-color: #b00020;
}

.mdc-text-field--invalid .mdc-floating-label {
	color: #b00020;
}

.just-validate-error-label.mdc-text-field-helper-text {
	margin-top: 4px;
	color: #b00020;
	font-size: 0.75rem;
}
```

---

## Оптимизация производительности

### Ленивая инициализация:

```javascript
class LazyValidator {
	constructor(formSelector) {
		this.formSelector = formSelector;
		this.validator = null;
		this.initialized = false;

		this.init();
	}

	init() {
		const form = document.querySelector(this.formSelector);
		if (!form) return;

		// Инициализация только при первом взаимодействии
		const initValidator = () => {
			if (!this.initialized) {
				this.validator = new JustValidate(this.formSelector);
				this.setupValidation();
				this.initialized = true;
			}
		};

		form.addEventListener('focusin', initValidator, { once: true });
		form.addEventListener('submit', initValidator);
	}

	setupValidation() {
		this.validator
			.addField('#email', [
				{
					rule: 'required',
					errorMessage: 'Email обязателен',
				},
				{
					rule: 'email',
					errorMessage: 'Введите корректный email',
				},
			])
			.onSuccess((event) => {
				console.log('Форма отправлена');
			});
	}
}

// Использование
const lazyValidator = new LazyValidator('#lazy-form');
```

### Кэширование валидаторов:

```javascript
class ValidatorCache {
	constructor() {
		this.cache = new Map();
	}

	getValidator(formSelector, config = {}) {
		if (this.cache.has(formSelector)) {
			return this.cache.get(formSelector);
		}

		const validator = new JustValidate(formSelector, config);
		this.cache.set(formSelector, validator);

		return validator;
	}

	destroyValidator(formSelector) {
		const validator = this.cache.get(formSelector);
		if (validator) {
			validator.destroy();
			this.cache.delete(formSelector);
		}
	}

	clear() {
		this.cache.forEach((validator) => validator.destroy());
		this.cache.clear();
	}
}

// Использование
const validatorCache = new ValidatorCache();
const validator = validatorCache.getValidator('#form');
```

---

## Тестирование

### Unit тесты с Jest:

```javascript
// validator.test.js
import JustValidate from 'just-validate';

describe('JustValidate', () => {
	let container;
	let validator;

	beforeEach(() => {
		container = document.createElement('div');
		container.innerHTML = `
      <form id="test-form">
        <input type="text" id="name" name="name">
        <input type="email" id="email" name="email">
        <button type="submit">Submit</button>
      </form>
    `;
		document.body.appendChild(container);

		validator = new JustValidate('#test-form');
	});

	afterEach(() => {
		if (validator) {
			validator.destroy();
		}
		document.body.removeChild(container);
	});

	test('should validate required field', () => {
		validator.addField('#name', [
			{
				rule: 'required',
				errorMessage: 'Name is required',
			},
		]);

		const nameInput = document.getElementById('name');
		nameInput.value = '';

		const isValid = validator.validate();
		expect(isValid).toBe(false);

		nameInput.value = 'John Doe';
		const isValidWithValue = validator.validate();
		expect(isValidWithValue).toBe(true);
	});

	test('should validate email field', () => {
		validator.addField('#email', [
			{
				rule: 'email',
				errorMessage: 'Invalid email',
			},
		]);

		const emailInput = document.getElementById('email');
		emailInput.value = 'invalid-email';

		const isValid = validator.validate();
		expect(isValid).toBe(false);

		emailInput.value = 'test@example.com';
		const isValidWithEmail = validator.validate();
		expect(isValidWithEmail).toBe(true);
	});
});
```

### E2E тесты с Cypress:

```javascript
// cypress/integration/form-validation.spec.js
describe('Form Validation', () => {
	beforeEach(() => {
		cy.visit('/contact-form');
	});

	it('should show error for empty required fields', () => {
		cy.get('#contact-form').submit();

		cy.get('.just-validate-error-label')
			.should('be.visible')
			.and('contain', 'Это поле обязательно');
	});

	it('should validate email format', () => {
		cy.get('#email').type('invalid-email');
		cy.get('#name').click(); // Trigger blur event

		cy.get('.just-validate-error-label')
			.should('be.visible')
			.and('contain', 'Введите корректный email');
	});

	it('should submit form with valid data', () => {
		cy.get('#name').type('John Doe');
		cy.get('#email').type('john@example.com');
		cy.get('#message').type('Test message');
		cy.get('#privacy').check();

		cy.get('#contact-form').submit();

		cy.get('.success-message')
			.should('be.visible')
			.and('contain', 'Сообщение отправлено успешно');
	});
});
```

---

## Отладка и диагностика

### Включение режима отладки:

```javascript
const validator = new JustValidate('#form', {
	// Включить подробное логирование
	debug: true,
});

// Добавление кастомного логгера
validator.onValidate((isValid, fields) => {
	console.group('Validation Debug');
	console.log('Form is valid:', isValid);
	console.log('Fields state:', fields);
	console.groupEnd();
});

// Логирование ошибок
validator.onFail((fields) => {
	console.error('Validation failed for fields:', Object.keys(fields));

	Object.entries(fields).forEach(([selector, field]) => {
		console.error(`${selector}:`, field.errors);
	});
});
```

### Инструменты разработчика:

```javascript
// Добавление глобального доступа к валидатору для отладки
window.debugValidator = validator;

// Консольные команды для отладки:
// debugValidator.validate() - принудительная валидация
// debugValidator.getErrors() - получить все ошибки
// debugValidator.isValid - проверить состояние
```

---

## Миграция и обновления

### Миграция с других библиотек:

```javascript
// Миграция с jQuery Validation
// Было:
// $('#form').validate({
//   rules: {
//     email: {
//       required: true,
//       email: true
//     }
//   }
// });

// Стало:
const validator = new JustValidate('#form');
validator.addField('#email', [
	{
		rule: 'required',
		errorMessage: 'Email обязателен',
	},
	{
		rule: 'email',
		errorMessage: 'Введите корректный email',
	},
]);
```

### Обновление версий:

```javascript
// Проверка версии библиотеки
console.log('JustValidate version:', JustValidate.version);

// Обработка устаревших методов
if (typeof validator.revalidate === 'function') {
	// Старая версия
	validator.revalidate();
} else {
	// Новая версия
	validator.refresh();
}
```

---

## Лучшие практики

### 1. Структура кода:

```javascript
class FormValidator {
	constructor(formSelector, options = {}) {
		this.formSelector = formSelector;
		this.options = options;
		this.validator = null;

		this.init();
	}

	init() {
		this.validator = new JustValidate(this.formSelector, this.options);
		this.setupFields();
		this.setupEvents();
	}

	setupFields() {
		// Настройка полей валидации
		this.validator
			.addField('#email', this.getEmailRules())
			.addField('#phone', this.getPhoneRules());
	}

	setupEvents() {
		this.validator
			.onSuccess(this.handleSuccess.bind(this))
			.onFail(this.handleFail.bind(this));
	}

	getEmailRules() {
		return [
			{
				rule: 'required',
				errorMessage: 'Email обязателен',
			},
			{
				rule: 'email',
				errorMessage: 'Введите корректный email',
			},
		];
	}

	getPhoneRules() {
		return [
			{
				rule: 'customRegexp',
				value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
				errorMessage: 'Введите корректный телефон',
			},
		];
	}

	handleSuccess(event) {
		console.log('Форма валидна');
		// Логика отправки
	}

	handleFail(fields) {
		console.log('Ошибки валидации:', fields);
		// Логика обработки ошибок
	}

	destroy() {
		if (this.validator) {
			this.validator.destroy();
		}
	}
}
```

### 2. Переиспользуемые правила:

```javascript
const ValidationRules = {
	required: (message = 'Поле обязательно') => ({
		rule: 'required',
		errorMessage: message,
	}),

	email: (message = 'Введите корректный email') => ({
		rule: 'email',
		errorMessage: message,
	}),

	phone: (message = 'Введите корректный телефон') => ({
		rule: 'customRegexp',
		value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
		errorMessage: message,
	}),

	minLength: (length, message) => ({
		rule: 'minLength',
		value: length,
		errorMessage: message || `Минимум ${length} символов`,
	}),

	strongPassword: (message = 'Пароль должен быть сложным') => ({
		rule: 'strongPassword',
		errorMessage: message,
	}),
};

// Использование
validator
	.addField('#email', [ValidationRules.required(), ValidationRules.email()])
	.addField('#phone', [ValidationRules.phone()])
	.addField('#password', [
		ValidationRules.required(),
		ValidationRules.minLength(8),
		ValidationRules.strongPassword(),
	]);
```

### 3. Конфигурация через данные:

```javascript
const formConfig = {
	'#registration-form': {
		fields: {
			'#firstName': [
				{ rule: 'required', errorMessage: 'Имя обязательно' },
				{ rule: 'minLength', value: 2, errorMessage: 'Минимум 2 символа' },
			],
			'#lastName': [
				{ rule: 'required', errorMessage: 'Фамилия обязательна' },
				{ rule: 'minLength', value: 2, errorMessage: 'Минимум 2 символа' },
			],
			'#email': [
				{ rule: 'required', errorMessage: 'Email обязателен' },
				{ rule: 'email', errorMessage: 'Введите корректный email' },
			],
			'#password': [
				{ rule: 'required', errorMessage: 'Пароль обязателен' },
				{ rule: 'strongPassword', errorMessage: 'Пароль должен быть сложным' },
			],
		},
		options: {
			validateBeforeSubmitting: true,
			focusInvalidField: true,
		},
		onSuccess: (event) => {
			console.log('Регистрация успешна');
			// Логика отправки
		},
	},
};

class ConfigurableValidator {
	constructor(config) {
		this.validators = new Map();
		this.initFromConfig(config);
	}

	initFromConfig(config) {
		Object.entries(config).forEach(([formSelector, formConfig]) => {
			const validator = new JustValidate(formSelector, formConfig.options);

			Object.entries(formConfig.fields).forEach(([fieldSelector, rules]) => {
				validator.addField(fieldSelector, rules);
			});

			if (formConfig.onSuccess) {
				validator.onSuccess(formConfig.onSuccess);
			}

			if (formConfig.onFail) {
				validator.onFail(formConfig.onFail);
			}

			this.validators.set(formSelector, validator);
		});
	}

	getValidator(formSelector) {
		return this.validators.get(formSelector);
	}

	destroy() {
		this.validators.forEach((validator) => validator.destroy());
		this.validators.clear();
	}
}

// Использование
const configurableValidator = new ConfigurableValidator(formConfig);
```

---

## Расширенные возможности

### Создание плагинов:

```javascript
// Плагин для интеграции с Google reCAPTCHA
class RecaptchaPlugin {
	constructor(siteKey) {
		this.siteKey = siteKey;
		this.loaded = false;
	}

	init() {
		if (!this.loaded) {
			this.loadRecaptcha();
		}
	}

	loadRecaptcha() {
		const script = document.createElement('script');
		script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
		document.head.appendChild(script);
		this.loaded = true;
	}

	getValidationRule() {
		return {
			validator: () => {
				return new Promise((resolve) => {
					grecaptcha.ready(() => {
						grecaptcha
							.execute(this.siteKey, { action: 'submit' })
							.then((token) => {
								// Отправка token на сервер для верификации
								fetch('/verify-recaptcha', {
									method: 'POST',
									headers: { 'Content-Type': 'application/json' },
									body: JSON.stringify({ token }),
								})
									.then((response) => response.json())
									.then((data) => resolve(data.success))
									.catch(() => resolve(false));
							});
					});
				});
			},
			errorMessage: 'Не удалось пройти проверку reCAPTCHA',
		};
	}
}

// Использование плагина
const recaptchaPlugin = new RecaptchaPlugin('your-site-key');
recaptchaPlugin.init();

validator.addField('#recaptcha-field', [recaptchaPlugin.getValidationRule()]);
```

### Интеграция с аналитикой:

```javascript
class AnalyticsValidator {
	constructor(formSelector, analyticsConfig = {}) {
		this.validator = new JustValidate(formSelector);
		this.analyticsConfig = analyticsConfig;
		this.setupAnalytics();
	}

	setupAnalytics() {
		this.validator
			.onSuccess((event) => {
				this.trackEvent('form_submit_success', {
					form_id: event.target.id,
					form_name: event.target.name || 'unnamed',
				});
			})
			.onFail((fields) => {
				this.trackEvent('form_submit_error', {
					form_id: this.getFormId(),
					errors_count: Object.keys(fields).length,
					error_fields: Object.keys(fields),
				});
			})
			.onValidate((isValid, fields) => {
				if (!isValid) {
					this.trackEvent('form_validation_error', {
						form_id: this.getFormId(),
						field_errors: Object.keys(fields),
					});
				}
			});
	}

	trackEvent(eventName, parameters) {
		// Google Analytics 4
		if (typeof gtag !== 'undefined') {
			gtag('event', eventName, parameters);
		}

		// Яндекс.Метрика
		if (typeof ym !== 'undefined' && this.analyticsConfig.yandexCounterId) {
			ym(
				this.analyticsConfig.yandexCounterId,
				'reachGoal',
				eventName,
				parameters
			);
		}

		// Кастомная аналитика
		if (this.analyticsConfig.customTracker) {
			this.analyticsConfig.customTracker(eventName, parameters);
		}
	}

	getFormId() {
		const form = document.querySelector(this.validator.form);
		return form ? form.id : 'unknown';
	}
}

// Использование
const analyticsValidator = new AnalyticsValidator('#contact-form', {
	yandexCounterId: '12345678',
	customTracker: (event, params) => {
		console.log('Custom analytics:', event, params);
	},
});
```

---

## Производительность и оптимизация

### Виртуализация для больших форм:

```javascript
class VirtualizedValidator {
	constructor(formSelector, options = {}) {
		this.formSelector = formSelector;
		this.options = options;
		this.visibleFields = new Set();
		this.allFields = new Map();
		this.validator = new JustValidate(formSelector, options);

		this.setupIntersectionObserver();
	}

	setupIntersectionObserver() {
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const fieldId = entry.target.id;

					if (entry.isIntersecting) {
						this.activateField(fieldId);
					} else {
						this.deactivateField(fieldId);
					}
				});
			},
			{
				rootMargin: '50px',
			}
		);
	}

	addField(selector, rules) {
		const element = document.querySelector(selector);
		if (!element) return this;

		this.allFields.set(selector, rules);
		this.observer.observe(element);

		return this;
	}

	activateField(selector) {
		if (this.visibleFields.has(selector)) return;

		const rules = this.allFields.get(selector);
		if (rules) {
			this.validator.addField(selector, rules);
			this.visibleFields.add(selector);
		}
	}

	deactivateField(selector) {
		if (!this.visibleFields.has(selector)) return;

		this.validator.removeField(selector);
		this.visibleFields.delete(selector);
	}

	destroy() {
		this.observer.disconnect();
		this.validator.destroy();
	}
}
```

### Мемоизация результатов валидации:

```javascript
class MemoizedValidator {
	constructor(formSelector, options = {}) {
		this.validator = new JustValidate(formSelector, options);
		this.cache = new Map();
		this.setupMemoization();
	}

	setupMemoization() {
		const originalAddField = this.validator.addField.bind(this.validator);

		this.validator.addField = (selector, rules) => {
			const memoizedRules = rules.map((rule) => {
				if (rule.validator && typeof rule.validator === 'function') {
					return {
						...rule,
						validator: this.memoizeValidator(rule.validator, selector),
					};
				}
				return rule;
			});

			return originalAddField(selector, memoizedRules);
		};
	}

	memoizeValidator(validatorFn, selector) {
		return (value, fields) => {
			const cacheKey = `${selector}:${value}`;

			if (this.cache.has(cacheKey)) {
				return this.cache.get(cacheKey);
			}

			const result = validatorFn(value, fields);

			if (result instanceof Promise) {
				return result.then((resolvedResult) => {
					this.cache.set(cacheKey, resolvedResult);
					return resolvedResult;
				});
			} else {
				this.cache.set(cacheKey, result);
				return result;
			}
		};
	}

	clearCache() {
		this.cache.clear();
	}
}
```

---

## Безопасность

### Защита от XSS:

```javascript
class SecureValidator {
  constructor(formSelector, options = {}) {
    this.validator = new JustValidate(formSelector, {
      ...options,
      // Экранирование HTML в сообщениях об ошибках
      errorLabelStyle: {
        ...options.errorLabelStyle
      }
    });

    this.setupSecurityRules();
  }

  setupSecurityRules() {
    // Правило для защиты от XSS
    this.xssProtectionRule = {
      validator: (value) => {
        // Проверка на потенциально опасные символы
        const dangerousPatterns = [
          /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          /javascript:/gi,
          /on\w+\s*=/gi,
          /<iframe/gi,
          /<object/gi,
          /<embed/gi
        ];

        return !dangerousPatterns.some(pattern => pattern.test(value));
      },
      errorMessage: 'Недопустимые символы в поле'
    };
  }

  addSecureField(selector, rules = []) {
    const secureRules = [
      ...rules,
      this.xssProtectionRule
    ];

    return this.validator.addField(selector, secureRules);
  }

  sanitizeValue(value) {
    return value
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>')
      .replace(/"/g, '"')
      .replace(/'/g, ''');
  }
}
```

### Защита от CSRF:

```javascript
class CSRFProtectedValidator {
	constructor(formSelector, options = {}) {
		this.validator = new JustValidate(formSelector, options);
		this.csrfToken = this.getCSRFToken();

		this.setupCSRFProtection();
	}

	getCSRFToken() {
		const metaTag = document.querySelector('meta[name="csrf-token"]');
		return metaTag ? metaTag.getAttribute('content') : null;
	}

	setupCSRFProtection() {
		this.validator.onSuccess((event) => {
			if (!this.csrfToken) {
				console.error('CSRF token not found');
				return false;
			}

			// Добавление CSRF токена к данным формы
			const formData = new FormData(event.target);
			formData.append('_token', this.csrfToken);

			this.submitWithCSRF(formData, event.target.action);
		});
	}

	submitWithCSRF(formData, action) {
		fetch(action, {
			method: 'POST',
			body: formData,
			headers: {
				'X-CSRF-TOKEN': this.csrfToken,
				'X-Requested-With': 'XMLHttpRequest',
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log('Form submitted successfully:', data);
			})
			.catch((error) => {
				console.error('Error submitting form:', error);
			});
	}
}
```

---

## Ресурсы:

- [JustValidate](https://just-validate.dev/)
- [Репозиторий инструмента](https://github.com/horprogs/Just-validate)
- [Документация API](https://just-validate.dev/docs/intro)
- [Примеры использования](https://just-validate.dev/docs/examples)
- [GitHub Issues](https://github.com/horprogs/Just-validate/issues)
- [NPM пакет](https://www.npmjs.com/package/just-validate)

---

## Заключение

JustValidate — это мощная и гибкая библиотека для валидации форм, которая предоставляет:

✅ **Простоту использования** - минимальная настройка для базовой функциональности
✅ **Гибкость** - поддержка кастомных правил и асинхронной валидации
✅ **Производительность** - легковесная библиотека без зависимостей
✅ **Расширяемость** - возможность создания плагинов и интеграций
✅ **Безопасность** - встроенные механизмы защиты
✅ **Совместимость** - работает с любыми фреймворками и библиотеками

Библиотека идеально подходит для проектов любого масштаба - от простых контактных форм до сложных многошаговых форм с условной логикой валидации.
