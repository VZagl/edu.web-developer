# HTML тег `<select>`

Тег `<select>` используется для создания выпадающего списка (select box) в HTML-формах. Внутри `<select>` размещаются элементы `<option>`, каждый из которых представляет отдельный пункт списка.

## Основной синтаксис

```html
<select name="cars">
	<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="mercedes">Mercedes</option>
	<option value="audi">Audi</option>
</select>
```

## Атрибуты `<select>`

- **name** — имя элемента для отправки на сервер.
- **id** — уникальный идентификатор.
- **multiple** — позволяет выбрать несколько вариантов.
- **size** — количество видимых строк списка.

### Пример с атрибутом multiple

```html
<select name="fruits" multiple size="3">
	<option value="apple">Яблоко</option>
	<option value="banana">Банан</option>
	<option value="cherry">Вишня</option>
	<option value="grape">Виноград</option>
</select>
```

## Атрибуты `<option>`

- **value** — значение, отправляемое на сервер.
- **selected** — выбран по умолчанию.
- **disabled** — пункт недоступен для выбора.

### Пример с selected и disabled

```html
<select name="city">
	<option disabled selected>Выберите город</option>
	<option value="msk">Москва</option>
	<option value="spb">Санкт-Петербург</option>
</select>
```

## Группировка с помощью `<optgroup>`

Для логической группировки вариантов используется тег `<optgroup>`.

```html
<select name="cars">
	<optgroup label="Германия">
		<option value="audi">Audi</option>
		<option value="bmw">BMW</option>
	</optgroup>
	<optgroup label="Швеция">
		<option value="volvo">Volvo</option>
		<option value="saab">Saab</option>
	</optgroup>
</select>
```

## Итоги

- `<select>` — выпадающий список.
- `<option>` — варианты выбора.
- `<optgroup>` — группировка вариантов.
- Поддерживает одиночный и множественный выбор.

**Применяется для создания удобных и компактных форм выбора.**

## Полезные ссылки

- [MDN: select](https://developer.mozilla.org/ru/docs/Web/HTML/Element/select)
- [HTML: тег select — htmlbook.ru](https://htmlbook.ru/html/select)
- [MDN: option](https://developer.mozilla.org/ru/docs/Web/HTML/Element/option)
- [MDN: optgroup](https://developer.mozilla.org/ru/docs/Web/HTML/Element/optgroup)
