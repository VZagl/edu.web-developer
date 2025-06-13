# SCSS Mixin

> **Примечание:** Имена миксинов, как и все идентификаторы SASS/SCSS, обрабатывают дефисы и подчеркивания как идентичные. Это означает, что `reset-list` и `reset_list` оба ссылаются на один и тот же миксин.

## Что такое Mixin?

Mixin в SCSS — это механизм для создания переиспользуемых блоков стилей. Они позволяют избежать дублирования кода и упрощают поддержку стилей.

## Синтаксис

Создание миксина:

```scss
@mixin имя-миксина($параметр1: значение1, $параметр2: значение2) {
	// Стили
}
```

Подключение миксина:

```scss
@include имя-миксина(значение1, значение2);
```

## Пример использования

### Простой миксин

```scss
@mixin center {
	display: flex;
	justify-content: center;
	align-items: center;
}

// применение:
.box {
	@include center;
	background-color: lightblue;
	width: 100px;
	height: 100px;
}
```

### Миксин с параметрами

```scss
@mixin border-radius($radius: 5px) {
	border-radius: $radius;
}

// применение:
.button {
	@include border-radius(10px);
	background-color: green;
	color: white;
}
```

### Миксин с условием

```scss
@mixin responsive($device) {
	@if $device == 'mobile' {
		font-size: 14px;
	} @else if $device == 'tablet' {
		font-size: 16px;
	} @else {
		font-size: 18px;
	}
}

// применение:
.text {
	@include responsive('tablet');
}
```

## Передача произвольных аргументов

SCSS позволяет миксинам принимать любое количество аргументов с помощью `...`. Это полезно, когда заранее неизвестно, сколько параметров потребуется.

### Пример с произвольным количеством аргументов

```scss
// миксин:
@mixin box-shadow($shadows...) {
	box-shadow: $shadows;
}

// применение:
.card {
	@include box-shadow(
		0 2px 4px rgba(0, 0, 0, 0.1),
		0 4px 8px rgba(0, 0, 0, 0.2)
	);
	background-color: white;
	padding: 20px;
}
```

В данном примере миксин принимает любое количество теней и применяет их к свойству `box-shadow`.

```scss
// миксин:
@mixin order($height, $selectors...) {
	@for $i from 0 to length($selectors) {
		#{nth($selectors, $i + 1)} {
			position: absolute;
			margin-top: $i * $height;
			height: $height;
		}
	}
}

// применение:
@include order(150px, 'input.name', 'input.address', 'input.zip');
```

### Пример с позиционными аргументами

```scss
// миксин:
@mixin gradient($colors...) {
	background: linear-gradient(to right, $colors...);
}

// применение:
.header {
	@include gradient(red, orange, yellow, green, blue, indigo, violet);
}
```

В данном примере миксин принимает любое количество цветов и создает градиент.

Результат:

```css
.header {
	background: linear-gradient(
		to right,
		red,
		orange,
		yellow,
		green,
		blue,
		indigo,
		violet
	);
}
```

### Пример с именованными аргументами

SCSS также поддерживает передачу произвольного количества именованных аргументов в миксины с помощью `...`. Это позволяет передавать параметры в виде пар ключ-значение.

Пример 1:

```scss
// миксин:
@mixin theme-colors($colors...) {
	@each $name, $color in $colors {
		.#{'text-' + $name} {
			color: $color;
		}
		.#{'bg-' + $name} {
			background-color: $color;
		}
	}
}

// применение:
@include theme-colors(
	'primary': #007bff,
	'secondary': #6c757d,
	'success': #28a745
);
```

В данном примере миксин принимает произвольное количество именованных аргументов, создавая классы для текста и фона с соответствующими цветами.

Результат:

```css
.text-primary {
	color: #007bff;
}
.bg-primary {
	background-color: #007bff;
}
.text-secondary {
	color: #6c757d;
}
.bg-secondary {
	background-color: #6c757d;
}
.text-success {
	color: #28a745;
}
.bg-success {
	background-color: #28a745;
}
```

Пример 2:

```scss
// миксин:
@mixin font-settings($settings...) {
	@each $property, $value in $settings {
		#{$property}: $value;
	}
}

// применение:
.text {
	@include font-settings(
		'font-size': 16px,
		'font-weight': bold,
		'line-height': 1.5
	);
}
```

Результат:

```css
.text {
	font-weight: bold;
	font-size: 16px;
	line-height: 1.5;
}
```

### Комбинирование произвольных аргументов

Вы можете комбинировать позиционные и именованные аргументы в одном миксине.

```scss
// миксин:
@mixin box($padding, $settings...) {
	padding: $padding;
	@each $property, $value in $settings {
		#{$property}: $value;
	}
}

// применение:
.card {
	@include box(20px, 'border': 1px solid black, 'background-color': white);
}
```

Результат:

```css
.card {
	border: 1px solid black;
	background-color: white;
	padding: 20px;
}
```

Использование произвольных аргументов делает миксины более гибкими и мощными, позволяя адаптировать их под различные сценарии.

## Content Blocks (Блоки содержимого)

Content Blocks в SCSS — это мощный инструмент, который позволяет создавать шаблоны стилей с возможностью вставки пользовательского содержимого. Они используются с помощью директивы `@content` внутри миксинов.

### Что такое Content Blocks?

Content Blocks позволяют передавать блоки кода в миксин, которые затем могут быть вставлены в определенное место внутри миксина. Это делает миксины более гибкими и позволяет создавать сложные структуры стилей.

### Синтаксис

Создание миксина с Content Block:

```scss
@mixin имя-миксина {
	// Стили до блока содержимого
	@content;
	// Стили после блока содержимого
}
```

Подключение миксина с Content Block:

```scss
@include имя-миксина {
	// Блок содержимого
}
```

### Пример использования

#### Простой пример

```scss
@mixin card {
	border: 1px solid #ccc;
	background-color: #fff;
	padding: 20px;
	@content;
}

// Применение:
.card {
	@include card {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
}
```

Результат:

```css
.card {
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border: 1px solid #ccc;
	background-color: #fff;
	padding: 20px;
}
```

#### Пример с условным содержимым

```scss
@mixin button($type) {
	border-radius: 5px;
	padding: 10px 20px;
	@if $type == 'primary' {
		background-color: blue;
		color: white;
	} @else if $type == 'secondary' {
		background-color: gray;
		color: white;
	}
	@content;
}

// Применение:
.button-primary {
	@include button('primary') {
		border: 2px solid darkblue;
	}
}

.button-secondary {
	@include button('secondary') {
		border: 2px solid darkgray;
	}
}
```

Результат:

```css
.button-primary {
	border: 2px solid darkblue;
	border-radius: 5px;
	background-color: blue;
	padding: 10px 20px;
	color: white;
}

.button-secondary {
	border: 2px solid darkgray;
	border-radius: 5px;
	background-color: gray;
	padding: 10px 20px;
	color: white;
}
```

### Пример с вложенными Content Blocks

```scss
@mixin container {
	display: flex;
	@content;
}

@mixin item {
	flex: 1;
	@content;
}

// Применение:
.container {
	@include container {
		@include item {
			background-color: lightblue;
		}
		@include item {
			background-color: lightgreen;
		}
	}
}
```

Результат:

```css
.container {
	display: flex;
}

.container > * {
	flex: 1;
}

.container > :nth-child(1) {
	background-color: lightblue;
}

.container > :nth-child(2) {
	background-color: lightgreen;
}
```

### Преимущества использования Content Blocks

1. **Гибкость**: Позволяют вставлять произвольный код в заранее определенные шаблоны.
2. **Универсальность**: Упрощают создание сложных и многослойных стилей.
3. **Читаемость**: Код становится более модульным и понятным.

## Преимущества использования миксинов

1. **Переиспользование кода**: Уменьшение дублирования стилей.
2. **Гибкость**: Возможность передавать параметры для настройки стилей.
3. **Читаемость**: Код становится более структурированным и понятным.

## Полезные ссылки

- [Официальная документация SCSS Mixin](https://sass-lang.com/documentation/at-rules/mixin/)
  - [Примеры использования миксинов](https://sass-lang.com/guide)
- [Официальная документация SCSS Content Blocks](https://sass-lang.com/documentation/at-rules/mixin/#content)
  - [Примеры использования Content Blocks](https://sass-lang.com/guide)
