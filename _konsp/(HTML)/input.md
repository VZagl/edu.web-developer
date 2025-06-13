## Элемент `<input>`

Элемент `<input>` используется для создания интерактивных элементов управления в веб-формах, позволяя пользователям вводить данные.

### Основные атрибуты

- `type` — определяет тип поля ввода (например, `text`, `password`, `email`, `file`, `number` и др.).
- `name` — имя поля, используется при отправке формы.
- `value` — значение по умолчанию.
- `placeholder` — текст-подсказка внутри поля.
- `required` — обязательное для заполнения поле.
- `disabled` — делает поле неактивным (не отправляется с формой).
- `readonly` — только для чтения (отправляется с формой).
- `autocomplete` — включает или отключает автозаполнение поля браузером.
- `autofocus` — автоматически устанавливает фокус на поле при загрузке страницы.
- `min`, `max`, `step` — минимальное, максимальное значение и шаг для числовых и датированных полей.
- `size` — ширина поля ввода в символах.
- `maxlength`, `minlength` — максимальная и минимальная длина вводимого текста.
- `pattern` — регулярное выражение для проверки соответствия введённых данных.
- `checked` — устанавливает состояние по умолчанию для чекбоксов и радиокнопок.
- `multiple` — позволяет выбрать несколько значений (например, для файлового ввода или email).
- `form` — указывает, к какой форме относится поле, если оно находится вне тега `<form>`.
- `accept` — определяет типы файлов, которые можно выбрать при загрузке файлов.
- `inputmode` — подсказывает браузеру, какую клавиатуру показывать на мобильных устройствах.
- `list` — связывает поле с `<datalist>` для автодополнения вариантов.
- `spellcheck` — включает/отключает проверку орфографии.

### Примеры использования

#### Текстовое поле

```html
<input type="text" name="username" placeholder="Введите имя пользователя" />
```

#### Пароль

```html
<input type="password" name="password" required />
```

#### Email

```html
<input type="email" name="user_email" placeholder="example@mail.com" />
```

#### Числовое поле

```html
<input type="number" name="age" min="0" max="120" step="1" />
```

#### Дата

```html
<input type="date" name="birthday" />
```

#### Загрузка файла

```html
<input type="file" name="resume" accept=".pdf,.doc" multiple />
```

#### Чекбокс

```html
<input type="checkbox" name="subscribe" checked /> Подписаться на новости
```

```html
<label for="checkbox_terms">
	<input id="checkbox_terms" required type="checkbox" />
	Я согласен с <a href="#">условиями</a>
</label>
```

#### Радиокнопки

```html
<input type="radio" name="gender" value="male" /> Мужчина
<input type="radio" name="gender" value="female" /> Женщина
```

#### Кнопка отправки

```html
<input type="submit" value="Отправить" />
```

### Валидация

Атрибуты `required`, `minlength`, `maxlength`, `pattern`, `min`, `max`, `step` позволяют валидировать вводимые данные на стороне клиента.

```html
<input type="text" name="code" required pattern="\d{4}" placeholder="4 цифры" />
```

### Советы по безопасности

- Не полагайтесь только на валидацию на стороне клиента — всегда проверяйте данные на сервере.

### Полезные ресурсы

- [Элемент input](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input)
