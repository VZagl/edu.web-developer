# Анимации при помощи CSS3

## Содержание

- [Содержание](#содержание)
- [Основы CSS3 анимаций](#основы-css3-анимаций)
	- [Ключевые понятия](#ключевые-понятия)
- [Создание анимации с `@keyframes`](#создание-анимации-с-keyframes)
	- [Синтаксис](#синтаксис)
	- [Альтернативный синтаксис](#альтернативный-синтаксис)
	- [Пример простой анимации](#пример-простой-анимации)
- [Свойства `animation`](#свойства-animation)
	- [`animation-name`](#animation-name)
	- [`animation-duration`](#animation-duration)
	- [`animation-timing-function`](#animation-timing-function)
	- [`animation-delay`](#animation-delay)
	- [`animation-iteration-count`](#animation-iteration-count)
	- [`animation-direction`](#animation-direction)
	- [`animation-fill-mode`](#animation-fill-mode)
	- [`animation-play-state`](#animation-play-state)
- [Краткая запись `animation`](#краткая-запись-animation)
	- [Примеры краткой записи](#примеры-краткой-записи)
- [Практические примеры](#практические-примеры)
	- [1. Анимация появления](#1-анимация-появления)
	- [2. Анимация вращения](#2-анимация-вращения)
	- [3. Анимация пульсации](#3-анимация-пульсации)
	- [4. Анимация подпрыгивания](#4-анимация-подпрыгивания)
	- [5. Сложная анимация с несколькими свойствами](#5-сложная-анимация-с-несколькими-свойствами)
- [Множественные анимации](#множественные-анимации)
- [Управление анимацией через JavaScript](#управление-анимацией-через-javascript)
- [Оптимизация производительности](#оптимизация-производительности)
	- [Рекомендации:](#рекомендации)
	- [Свойства, которые лучше анимировать:](#свойства-которые-лучше-анимировать)
	- [Свойства, которые лучше не анимировать:](#свойства-которые-лучше-не-анимировать)
- [Поддержка браузерами](#поддержка-браузерами)
- [Полезные инструменты](#полезные-инструменты)
- [Заключение](#заключение)
- [Дополнительные ресурсы](#дополнительные-ресурсы)

---

## Основы CSS3 анимаций

CSS3 анимации позволяют создавать плавные переходы между различными состояниями элементов без использования JavaScript.

### Ключевые понятия

1. **`@keyframes`** - правило для определения ключевых кадров анимации
2. **`animation`** - свойство для применения анимации к элементу

## Создание анимации с `@keyframes`

### Синтаксис

```css
@keyframes имя-анимации {
	0% {
		/* начальное состояние */
	}
	50% {
		/* промежуточное состояние */
	}
	100% {
		/* конечное состояние */
	}
}
```

### Альтернативный синтаксис

```css
@keyframes имя-анимации {
	from {
		/* начальное состояние */
	}
	to {
		/* конечное состояние */
	}
}
```

### Пример простой анимации

```css
@keyframes slideIn {
	from {
		transform: translateX(-100%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
```

## Свойства `animation`

### `animation-name`

Указывает имя анимации, определенной в `@keyframes`

```css
.element {
	animation-name: slideIn;
}
```

### `animation-duration`

Продолжительность анимации

```css
.element {
	animation-duration: 2s; /* секунды */
	animation-duration: 2000ms; /* миллисекунды */
}
```

### `animation-timing-function`

Функция времени анимации (скорость изменения)

```css
.element {
	animation-timing-function: ease; /* по умолчанию */
	animation-timing-function: linear;
	animation-timing-function: ease-in;
	animation-timing-function: ease-out;
	animation-timing-function: ease-in-out;
	animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

**Основные значения:**

- `linear` - равномерная скорость
- `ease` - медленный старт, быстрая середина, медленный конец
- `ease-in` - медленный старт
- `ease-out` - медленный конец
- `ease-in-out` - медленный старт и конец
- `cubic-bezier(x1, y1, x2, y2)` - пользовательская кривая

### `animation-delay`

Задержка перед началом анимации

```css
.element {
	animation-delay: 1s; /* задержка 1 секунда */
	animation-delay: -0.5s; /* начать с середины анимации */
}
```

### `animation-iteration-count`

Количество повторений анимации

```css
.element {
	animation-iteration-count: 1; /* один раз (по умолчанию) */
	animation-iteration-count: 3; /* три раза */
	animation-iteration-count: infinite; /* бесконечно */
}
```

### `animation-direction`

Направление анимации

```css
.element {
	animation-direction: normal; /* по умолчанию */
	animation-direction: reverse; /* в обратном направлении */
	animation-direction: alternate; /* туда-сюда */
	animation-direction: alternate-reverse; /* сюда-туда */
}
```

### `animation-fill-mode`

Определяет, как анимация влияет на элемент до и после выполнения

```css
.element {
	animation-fill-mode: none; /* по умолчанию */
	animation-fill-mode: forwards; /* сохранить конечное состояние */
	animation-fill-mode: backwards; /* применить начальное состояние */
	animation-fill-mode: both; /* и то, и другое */
}
```

### `animation-play-state`

Управление воспроизведением анимации

```css
.element {
	animation-play-state: running; /* по умолчанию */
	animation-play-state: paused; /* пауза */
}
```

## Краткая запись `animation`

```css
.element {
	animation: name duration timing-function delay iteration-count direction
		fill-mode play-state;
}
```

### Примеры краткой записи

```css
.element {
	animation: slideIn 2s ease-in-out 0.5s infinite alternate both;
}

.element {
	animation: fadeIn 1s ease-out forwards;
}
```

## Практические примеры

### 1. Анимация появления

```css
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.fade-in {
	animation: fadeIn 1s ease-in;
}
```

### 2. Анимация вращения

```css
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

.spinner {
	animation: rotate 2s linear infinite;
}
```

### 3. Анимация пульсации

```css
@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

.pulse {
	animation: pulse 1s ease-in-out infinite;
}
```

### 4. Анимация подпрыгивания

```css
@keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
	}
}

.bounce {
	animation: bounce 2s infinite;
}
```

### 5. Сложная анимация с несколькими свойствами

```css
@keyframes complexAnimation {
	0% {
		transform: translateX(-100px) rotate(0deg);
		opacity: 0;
		background-color: red;
	}
	50% {
		transform: translateX(0) rotate(180deg);
		opacity: 0.5;
		background-color: yellow;
	}
	100% {
		transform: translateX(100px) rotate(360deg);
		opacity: 1;
		background-color: green;
	}
}

.complex {
	animation: complexAnimation 3s ease-in-out;
}
```

## Множественные анимации

Можно применить несколько анимаций к одному элементу:

```css
.element {
	animation:
		slideIn 1s ease-out,
		fadeIn 1s ease-in,
		rotate 2s linear infinite;
}
```

## Управление анимацией через JavaScript

```javascript
// Запуск анимации
element.style.animationPlayState = 'running';

// Пауза анимации
element.style.animationPlayState = 'paused';

// События анимации
element.addEventListener('animationstart', function () {
	console.log('Анимация началась');
});

element.addEventListener('animationend', function () {
	console.log('Анимация закончилась');
});

element.addEventListener('animationiteration', function () {
	console.log('Итерация анимации завершена');
});
```

## Оптимизация производительности

### Рекомендации:

1. Используйте `transform` и `opacity` для лучшей производительности
2. Избегайте анимации свойств, вызывающих `reflow` (`width`, `height`, `margin`, `padding`)
3. Используйте `will-change` для подготовки элемента к анимации:

```css
.element {
	will-change: transform, opacity;
}
```

### Свойства, которые лучше анимировать:

- `transform` (`translate`, `rotate`, `scale`)
- `opacity`
- `filter`

### Свойства, которые лучше не анимировать:

- `width`, `height`
- `margin`, `padding`
- `border-width`
- `left`, `top`, `right`, `bottom`

## Поддержка браузерами

CSS3 анимации поддерживаются всеми современными браузерами. Для старых версий могут потребоваться префиксы:

```css
@-webkit-keyframes slideIn {
	/* ... */
}

@keyframes slideIn {
	/* ... */
}

.element {
	-webkit-animation: slideIn 1s ease-out;
	animation: slideIn 1s ease-out;
}
```

## Полезные инструменты

1. **CSS Animation Generator** - онлайн генераторы анимаций
2. **DevTools** - инспектор анимаций в браузере
3. **Animate.css** - библиотека готовых анимаций
4. **cubic-bezier.com** - инструмент для создания кривых Безье

## Заключение

CSS3 анимации предоставляют мощный инструмент для создания интерактивных и привлекательных веб-интерфейсов. Правильное использование анимаций может значительно улучшить пользовательский опыт, но важно помнить о производительности и не злоупотреблять эффектами.

## Дополнительные ресурсы

- [Документация](developer.mozilla.org/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Еще одна документация как дополнение](html5book.ru/css3-animation)
- [animation-timing-function](developer.mozilla.org/ru/docs/Web/CSS/animation-timing-function)
