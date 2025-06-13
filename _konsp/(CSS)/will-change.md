# `will-change`

CSS свойство `will-change` позволяет заранее уведомить браузер о том, какие свойства элемента будут анимироваться.

## Синтаксис

```css
.element {
	will-change: auto | scroll-position | contents | transform | opacity |
		<custom-ident>;
}
```

## Значения

- `auto` - браузер применяет стандартные оптимизации
- `scroll-position` - элемент будет прокручиваться
- `contents` - содержимое элемента будет меняться
- `transform` - будет меняться трансформация элемента
- `opacity` - будет меняться прозрачность
- `<custom-ident>` - любое валидное CSS свойство

## Примеры использования

```css
/* Оптимизация для анимации transform */
.moving-element {
	will-change: transform;
}

/* Несколько свойств */
.complex-animation {
	will-change: transform, opacity;
}
```

## Важные моменты

1. Не злоупотребляйте `will-change` - используйте только для элементов, которые действительно будут анимироваться

2. Применяйте `will-change` заранее, до начала анимации:

```css
.element:hover {
	will-change: transform;
}
.element:active {
	transform: scale(1.5);
}
```

3. После завершения анимации рекомендуется убирать `will-change`:

```javascript
element.style.willChange = 'transform';
// анимация
element.addEventListener('transitionend', () => {
	element.style.willChange = 'auto';
});
```

4. Не применяйте `will-change` ко всем элементам - это может ухудшить производительность

## Поддержка браузерами

- Chrome 36+
- Firefox 36+
- Safari 9.1+
- Edge 79+

## Ресурсы:

- [will-change](https://developer.mozilla.org/ru/docs/Web/CSS/will-change)
