# CSS-свойство `transform`

Свойство `transform` позволяет трансформировать элементы:

- поворачивать
- масштабировать
- наклонять
- перемещать
- комбинировать несколько трансформаций

## Основные функции `transform`

> [!WARNING] Предупреждение:
> Только трансформируемый элемент может быть `transform`. Т.е. все элементы, шаблоны которых регулируются блочной моделью CSS, кроме : [неизменяемые инлайновые блоки](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_display/Visual_formatting_model#inline-level_elements_and_inline_boxes), [блоки таблица-колонка](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/col) и [блоки таблица-колонка-группа](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/colgroup)

### Синтаксис `transform`

- <https://developer.mozilla.org/ru/docs/Web/CSS/transform#%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81>

## Связь `transform` и `transition`

> [!TIP]
> Свойства `transform` и `transition` часто используются вместе для создания плавных анимированных эффектов:
>
> - **`transform`** — определяет **что** изменяется (поворот, масштаб, перемещение)
> - **`transition`** — определяет **как** происходит изменение (длительность, задержка, функция времени)

### Базовый синтаксис `transition` для `transform`

```css
.element {
	/* Плавный переход для всех трансформаций */
	transition: transform 0.3s ease;

	/* Или более детально */
	transition: transform 0.3s ease-in-out 0.1s;
	/*          свойство | длительность | функция | задержка */
}

.element:hover {
	transform: scale(1.2) rotate(15deg);
}
```

### Практические примеры

#### Плавное масштабирование при наведении

```css
.card {
	transition: transform 0.3s ease;
}

.card:hover {
	transform: scale(1.05);
}
```

#### Анимированное вращение

```css
.icon {
	transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon:hover {
	transform: rotate(360deg);
}
```

#### Комбинированные трансформации с разными временами

```css
.element {
	transition:
		transform 0.3s ease,
		opacity 0.2s ease;
}

.element:hover {
	transform: translateY(-10px) scale(1.1);
	opacity: 0.8;
}
```

#### Сложная анимация с задержкой

```css
.menu-item {
	transform: translateX(-100%);
	transition: transform 0.4s ease-out;
}

.menu-item:nth-child(1) {
	transition-delay: 0.1s;
}
.menu-item:nth-child(2) {
	transition-delay: 0.2s;
}
.menu-item:nth-child(3) {
	transition-delay: 0.3s;
}

.menu.open .menu-item {
	transform: translateX(0);
}
```

### Важные моменты

1. **Производительность**: `transform` не вызывает перерасчет `layout`, что делает анимации плавными
2. **Аппаратное ускорение**: 3D-трансформации (`translate3d`, `rotateZ`) активируют GPU
3. **Комбинирование**: можно анимировать несколько свойств одновременно
4. **Функции времени**: используйте `ease`, `ease-in-out` для естественных движений

### Оптимизация для анимаций

```css
.animated-element {
	/* Принудительное включение аппаратного ускорения */
	transform: translateZ(0);

	transition: transform 0.3s ease;
	/* или */
	will-change: transform;
}
```

## Полный список функций трансформации

### Функции перемещения (Translation)

- `translate(x, y)` - перемещение по осям X и Y
- `translateX(x)` - перемещение только по оси X
- `translateY(y)` - перемещение только по оси Y
- `translateZ(z)` - перемещение по оси Z (глубина, требует perspective)
- `translate3d(x, y, z)` - 3D перемещение по всем трем осям

### Функции масштабирования (Scale)

- `scale(x, y)` - масштабирование по осям X и Y (если один параметр - по обеим осям)
- `scaleX(x)` - масштабирование только по оси X
- `scaleY(y)` - масштабирование только по оси Y
- `scaleZ(z)` - масштабирование по оси Z (глубина)
- `scale3d(x, y, z)` - 3D масштабирование по всем трем осям

### Функции поворота (Rotation)

- `rotate(angle)` - поворот в 2D плоскости (вокруг оси Z)
- `rotateX(angle)` - поворот вокруг оси X ("вперед-назад")
- `rotateY(angle)` - поворот вокруг оси Y ("влево-вправо")
- `rotateZ(angle)` - поворот вокруг оси Z (аналогично rotate())
- `rotate3d(x, y, z, angle)` - 3D поворот вокруг произвольной оси, заданной вектором

### Функции наклона (Skew)

- `skew(x-angle, y-angle)` - наклон по осям X и Y (если один параметр - только по X)
- `skewX(angle)` - наклон только по оси X
- `skewY(angle)` - наклон только по оси Y

### Матричные функции

- `matrix(a, b, c, d, tx, ty)` - 2D матрица трансформации (6 параметров)
- `matrix3d(...)` - 3D матрица трансформации (16 параметров для полной 4x4 матрицы)

### Функция перспективы

- `perspective(length)` - задает перспективу для элемента (применяется к самому элементу)

## Единицы измерения

### Для углов:

- `deg` - градусы (0-360)
- `rad` - радианы (0-2π)
- `grad` - грады (0-400)
- `turn` - обороты (0-1)

### Для расстояний:

- `px`, `em`, `rem`, `%` - стандартные единицы CSS

### `translate()` - перемещение

```css
.element {
	transform: translate(50px, 100px); /* X и Y */
	transform: translateX(50px); /* только по X */
	transform: translateY(100px); /* только по Y */
	transform: translate3d(x, y, z); /* 3D перемещение */
}
```

### `scale()` - масштабирование

```css
.element {
	transform: scale(2); /* увеличение в 2 раза */
	transform: scale(0.5); /* уменьшение в 2 раза */
	transform: scale(2, 1.5); /* разные значения по X и Y */
	transform: scaleX(2); /* только по X */
	transform: scaleY(1.5); /* только по Y */
}
```

### `rotate()` - поворот

```css
.element {
	transform: rotate(45deg); /* поворот на 45 градусов */
	transform: rotate3d(x, y, z, angle); /* 3D поворот */
	transform: rotateX(45deg); /* поворот вокруг оси X */
	transform: rotateY(45deg); /* поворот вокруг оси Y */
	transform: rotateZ(45deg); /* поворот вокруг оси Z */
}
```

### `skew()` - наклон

```css
.element {
	transform: skew(20deg); /* наклон по X */
	transform: skew(20deg, 10deg); /* наклон по X и Y */
	transform: skewX(20deg); /* наклон только по X */
	transform: skewY(10deg); /* наклон только по Y */
}
```

### `matrix()` - матричные трансформации

```css
.element {
	/* matrix(a, b, c, d, tx, ty) */
	/* a, d - масштабирование по X и Y */
	/* b, c - наклон */
	/* tx, ty - перемещение по X и Y */

	/* Простое перемещение */
	transform: matrix(1, 0, 0, 1, 50, 100);
	/* эквивалентно translate(50px, 100px) */

	/* Масштабирование */
	transform: matrix(2, 0, 0, 1.5, 0, 0);
	/* эквивалентно scale(2, 1.5) */

	/* Поворот на 45 градусов */
	transform: matrix(0.707, 0.707, -0.707, 0.707, 0, 0);
	/* эквивалентно rotate(45deg) */

	/* Наклон по X на 20 градусов */
	transform: matrix(1, 0, 0.364, 1, 0, 0);
	/* эквивалентно skewX(20deg) */

	/* Комбинированная трансформация */
	transform: matrix(1.5, 0.5, -0.5, 1.5, 100, 50);
}
```

### `matrix3d()` - 3D матричные трансформации

```css
.element {
	/* matrix3d принимает 16 параметров для 4x4 матрицы */
	/* [m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44] */

	/* Единичная матрица (без изменений) */
	transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

	/* 3D перемещение */
	transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 25, 1);
	/* эквивалентно translate3d(50px, 100px, 25px) */

	/* 3D масштабирование */
	transform: matrix3d(2, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1);
	/* эквивалентно scale3d(2, 1.5, 0.5) */

	/* Поворот вокруг оси Y на 45 градусов */
	transform: matrix3d(
		0.707,
		0,
		0.707,
		0,
		0,
		1,
		0,
		0,
		-0.707,
		0,
		0.707,
		0,
		0,
		0,
		0,
		1
	);
	/* эквивалентно rotateY(45deg) */
}
```

### `perspective()` - функция перспективы

```css
.element {
	/* Перспектива применяется к самому элементу */
	/* Чем меньше значение - тем сильнее эффект перспективы */

	/* Слабая перспектива */
	transform: perspective(2000px) rotateY(45deg);

	/* Средняя перспектива */
	transform: perspective(1000px) rotateX(30deg);

	/* Сильная перспектива */
	transform: perspective(500px) rotateY(60deg);

	/* Комбинирование с другими трансформациями */
	transform: perspective(800px) rotateX(45deg) rotateY(45deg) translateZ(100px);

	/* Перспектива должна быть первой в цепочке трансформаций */
	transform: perspective(1000px) translate3d(50px, 0, 100px) rotateY(30deg);
}

/* Сравнение perspective() и свойства perspective */
.container {
	/* Перспектива для всех дочерних элементов */
	perspective: 1000px;
}

.child {
	/* Перспектива только для этого элемента */
	transform: perspective(1000px) rotateY(45deg);
}
```

## Комбинирование трансформаций

```css
.element {
	/* Несколько трансформаций применяются справа налево */
	transform: rotate(45deg) scale(1.5) translate(100px, 200px);
}
```

## Точка трансформации

Свойство `transform-origin` задает точку, относительно которой происходит трансформация:

```css
.element {
	transform-origin: center; /* по умолчанию */
	transform-origin: top left;
	transform-origin: 50% 50%;
	transform-origin: 100px 200px;
}
```

## 3D-трансформации

Для работы с 3D необходимо задать перспективу:

```css
.container {
	perspective: 1000px; /* задаем перспективу */
}

.element {
	transform: rotateY(45deg) translateZ(100px);
}
```

## Примеры использования

### Центрирование элемента

```css
.centered {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

### Эффект при наведении

```css
.card {
	transition: transform 0.3s ease;
}

.card:hover {
	transform: scale(1.1) rotate(5deg);
}
```

### Флип-карточка

```css
.card {
	transform-style: preserve-3d;
	transition: transform 0.6s;
}

.card:hover {
	transform: rotateY(180deg);
}
```

## Ресурсы:

- [transform](https://developer.mozilla.org/ru/docs/Web/CSS/transform)
