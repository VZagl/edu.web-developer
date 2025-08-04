# Open Graph Protocol - Краткий конспект

## Что такое Open Graph Protocol (OGP)?

**Open Graph Protocol** — это стандарт разметки веб-страниц, который позволяет превратить любую страницу в богатый объект социального графа. Первоначально создан Facebook, но теперь используется многими социальными сетями (Twitter, LinkedIn, VK и др.).

> [!TIP] Зачем это нужно?
>
> Когда поисковой сервер или социальная сеть находят страницу сайта, они добавляют в свой индекс ссылку на эту страницу, картинку и описание.
> Без мета-тегов робот может использовать случайную картинку (например, рекламный баннер) а также случайный текст описания.

> [!IMPORTANT] Важно знать
>
> - Open Graph используется не только социальными сетями, но и мессенджерами (WhatsApp, Telegram, Slack)
> - Поисковые системы (Google, Яндекс) также учитывают OG-теги при формировании сниппетов
> - Без правильной разметки ваш контент может выглядеть непривлекательно при шаринге

## Основная цель

Когда пользователь делится ссылкой в социальной сети, OGP позволяет контролировать:

- Какой заголовок будет отображен
- Какое описание покажется
- Какое изображение будет использовано
- Как будет выглядеть превью ссылки

## Базовые обязательные свойства

Каждая страница должна содержать 4 основных мета-тега:

```html
<meta property="og:title" content="Заголовок страницы" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com/page" />
```

### Описание базовых свойств:

- **`og:title`** — заголовок объекта (название страницы, статьи, товара)
- **`og:type`** — тип объекта (website, article, video.movie, music.song и др.)
- **`og:image`** — URL изображения для превью
- **`og:url`** — канонический URL страницы

## Дополнительные рекомендуемые свойства

```html
<meta
	property="og:description"
	content="Краткое описание содержимого страницы"
/>
<meta property="og:site_name" content="Название сайта" />
<meta property="og:locale" content="ru_RU" />
```

### Описание дополнительных свойств:

- **`og:description`** — описание объекта (1-2 предложения)
- **`og:site_name`** — название всего сайта
- **`og:locale`** — локаль страницы (язык_ТЕРРИТОРИЯ)
- **`og:audio`** — URL аудиофайла
- **`og:video`** — URL видеофайла

## Структурированные свойства для изображений

```html
<meta property="og:image" content="https://example.com/image.jpg" />
<meta
	property="og:image:secure_url"
	content="https://secure.example.com/image.jpg"
/>
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Описание изображения" />
```

## Основные типы объектов

### Универсальные типы:

- **`website`** — обычная веб-страница (по умолчанию)
- **`article`** — статья
- **`profile`** — профиль пользователя

### Медиа типы:

- **`video.movie`** — фильм
- **`video.tv_show`** — телешоу
- **`music.song`** — песня
- **`music.album`** — альбом

## Пример полной разметки

```html
<!DOCTYPE html>
<html prefix="og: https://ogp.me/ns#">
	<head>
		<title>Заголовок страницы</title>

		<!-- Основные OG теги -->
		<meta property="og:title" content="Заголовок для социальных сетей" />
		<meta property="og:type" content="article" />
		<meta property="og:url" content="https://example.com/article" />
		<meta property="og:image" content="https://example.com/preview.jpg" />

		<!-- Дополнительные OG теги -->
		<meta
			property="og:description"
			content="Краткое описание статьи для превью"
		/>
		<meta property="og:site_name" content="Название сайта" />
		<meta property="og:locale" content="ru_RU" />

		<!-- Структурированные свойства изображения -->
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image:alt" content="Описание изображения" />
	</head>
	<body>
		<!-- Содержимое страницы -->
	</body>
</html>
```

## Множественные значения (массивы)

Можно указывать несколько изображений:

```html
<meta property="og:image" content="https://example.com/image1.jpg" />
<meta property="og:image" content="https://example.com/image2.jpg" />
<meta property="og:image" content="https://example.com/image3.jpg" />
```

## Рекомендации по изображениям

- **Размер**: 1200×630 пикселей (соотношение 1.91:1)
- **Минимум**: 600×315 пикселей
- **Формат**: JPG, PNG
- **Размер файла**: до 8 МБ
- **Альтернативный текст**: всегда указывайте `og:image:alt`

> [!WARNING] Частые ошибки
>
> - Изображение слишком маленькое (менее 600px по ширине)
> - Неправильное соотношение сторон (изображение обрезается)
> - Изображение недоступно по HTTPS
> - Отсутствие альтернативного текста для изображения

## Особенности для разных платформ

### Facebook

- Кэширует изображения и метаданные
- Для обновления используйте [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Поддерживает видео-превью

### Twitter

- Имеет собственные Twitter Cards (`twitter:card`, `twitter:title`, etc.)
- Fallback на Open Graph если Twitter Cards отсутствуют
- Размер изображения: 1200×628 для `summary_large_image`

### LinkedIn

- Строго проверяет размеры изображений
- Рекомендует изображения 1200×627 пикселей
- Не поддерживает HTML в описаниях

## Инструменты для проверки

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — очистка кэша Facebook
- [Open Graph Check](https://www.opengraph.xyz/) — проверка разметки
- [Meta Tags Preview](https://metatags.io/) — превью для разных соцсетей
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) — проверка для LinkedIn
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) — валидатор Twitter Cards

## Быстрый чеклист для внедрения

- [ ] Добавлены 4 обязательных OG-тега (`title`, `type`, `image`, `url`)
- [ ] Указан `og:description` (не более 160 символов)
- [ ] Изображение имеет правильный размер (1200×630)
- [ ] Изображение доступно по HTTPS
- [ ] Добавлен `og:image:alt` для доступности
- [ ] Проверена разметка в Facebook Debugger
- [ ] Протестировано отображение в основных соцсетях

## Полезные ссылки

- [Официальная спецификация](https://ogp.me/)
- [Документация Facebook](https://developers.facebook.com/docs/sharing/webmasters/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
