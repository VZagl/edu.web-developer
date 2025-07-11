# CSS псевдокласс `:autofill`

## Описание

Псевдокласс `:autofill` применяется к элементам `<input>`, когда их значение было автоматически заполнено браузером (автозаполнение).

## Особенности работы

- **Активация**: срабатывает, когда браузер автоматически заполняет поле
- **Деактивация**: перестает действовать, как только пользователь начинает редактировать поле
- **Применение**: работает только с элементами `<input>`

## Синтаксис

```css
input:autofill {
	/* стили для автозаполненных полей */
}
```

## Проблема с переопределением стилей браузера

> [!WARNING]
> Многие браузеры используют `!important` в своих стилях для `:autofill`, что делает их практически невозможными для переопределения обычными CSS-правилами.

### Пример стилей Chrome по умолчанию:

```css
input:-webkit-autofill {
	background-image: none !important;
	background-color: rgb(232 240 254) !important;
	color: -internal-light-dark(black, white) !important;
}
```

> [!CAUTION]
> Это означает, что вы **не можете** напрямую изменить `background-color`, `background-image` или `color` в своих правилах.

## Способы обхода ограничений

### 1. Использование `box-shadow` (рекомендуемый способ)

> [!TIP]
> Используйте `box-shadow` с большим значением inset для имитации фона - это самый надежный способ.

```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
	/* Перекрываем фон с помощью внутренней тени */
	-webkit-box-shadow: 0 0 0 1000px white inset !important;
	/* Меняем цвет текста */
	-webkit-text-fill-color: #333 !important;
}
```

### 2. Использование `transition` для задержки применения стилей

> [!NOTE]
> Этот метод работает за счет задержки применения стилей браузера на очень долгое время.

```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
	/* Задерживаем применение стилей браузера */
	-webkit-transition: background-color 5000s ease-in-out 0s;
	transition: background-color 5000s ease-in-out 0s;
	-webkit-text-fill-color: #333 !important;
}
```

### 3. Комбинированный подход

> [!TIP]
> Комбинирование методов дает наилучший результат в разных браузерах.

```css
input:-webkit-autofill {
	/* Убираем фон */
	-webkit-box-shadow: 0 0 0 1000px #f8f9fa inset !important;
	/* Меняем цвет текста */
	-webkit-text-fill-color: #212529 !important;
	/* Задерживаем стили браузера */
	-webkit-transition: background-color 5000s ease-in-out 0s;
	transition: background-color 5000s ease-in-out 0s;
}

/* Для состояний */
input:-webkit-autofill:focus {
	-webkit-box-shadow: 0 0 0 1000px #e3f2fd inset !important;
	-webkit-text-fill-color: #1976d2 !important;
}
```

## Практические примеры

### Полное переопределение стилей автозаполнения

```css
/* Основные стили */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
	-webkit-box-shadow: 0 0 0 1000px transparent inset !important;
	-webkit-text-fill-color: inherit !important;
	-webkit-transition: background-color 5000s ease-in-out 0s;
	transition: background-color 5000s ease-in-out 0s;
}

/* Кастомные стили */
input:autofill {
	border: 2px solid #007acc;
	border-radius: 4px;
}
```

### Темная тема

```css
/* Для темной темы */
.dark-theme input:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 1000px #2d3748 inset !important;
	-webkit-text-fill-color: #e2e8f0 !important;
}
```

## JavaScript-решения (крайний случай)

> [!WARNING]
> Используйте JavaScript-решения только в крайних случаях, когда CSS-методы не работают.

Если CSS-методы не работают, можно использовать JavaScript:

```javascript
// Отключение автозаполнения
document.querySelectorAll('input').forEach((input) => {
	input.setAttribute('autocomplete', 'off');
});

// Или программное удаление стилей автозаполнения
document.addEventListener('DOMContentLoaded', function () {
	const inputs = document.querySelectorAll('input:-webkit-autofill');
	inputs.forEach((input) => {
		input.style.setProperty('background-color', 'white', 'important');
	});
});
```

## Кроссбраузерная совместимость

> [!IMPORTANT]
> Обязательно тестируйте в разных браузерах - поведение автозаполнения может значительно отличаться.

```css
/* Полная поддержка */
input:-webkit-autofill,
input:-moz-autofill,
input:autofill {
	-webkit-box-shadow: 0 0 0 1000px white inset !important;
	-webkit-text-fill-color: #333 !important;
}
```

## Типичные случаи использования

- Формы входа (логин/пароль)
- Формы регистрации
- Адресные формы
- Формы оплаты
- Контактные формы

## Полезные советы

> [!TIP] > **Лучшие практики для работы с автозаполнением:**
>
> 1. **Всегда используйте `!important`** при работе с автозаполнением
> 2. **Тестируйте в разных браузерах** - поведение может отличаться
> 3. **Используйте `box-shadow`** вместо `background-color` для надежности
> 4. **Не забывайте про состояния** `:hover`, `:focus`, `:active`

> [!NOTE]
> Если стилизация критична для дизайна, рассмотрите отключение автозаполнения: `autocomplete="off"`
