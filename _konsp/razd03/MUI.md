# MUI

## Что такое MUI?

MUI (ранее Material-UI) — это популярная библиотека компонентов React, основанная на принципах Material Design от Google. Она предоставляет готовые компоненты пользовательского интерфейса, которые можно легко настроить и интегрировать в проекты.

## Основные особенности MUI

- **Компоненты Material Design**: MUI реализует компоненты, соответствующие рекомендациям Material Design.
- **Высокая кастомизация**: Возможность настройки тем, стилей и поведения компонентов.
- **Поддержка TypeScript**: Полная совместимость с TypeScript для типизации.
- **Стилизация с помощью CSS-in-JS**: Использует библиотеку Emotion для стилизации компонентов.
- **Большая экосистема**: Включает дополнительные пакеты, такие как MUI X (таблицы, графики и т.д.).

## Установка

Для начала работы с MUI необходимо установить библиотеку через npm или yarn:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Или:

```bash
yarn add @mui/material @emotion/react @emotion/styled
```

## Пример использования

Пример простого приложения с использованием кнопки из MUI:

```jsx
import React from 'react';
import Button from '@mui/material/Button';

function App() {
	return (
		<div>
			<Button variant='contained' color='primary'>
				Нажми меня
			</Button>
		</div>
	);
}

export default App;
```

## Настройка темы

MUI позволяет создавать собственные темы для изменения внешнего вида компонентов:

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#dc004e',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Button color='primary'>Первичная кнопка</Button>
			<Button color='secondary'>Вторичная кнопка</Button>
		</ThemeProvider>
	);
}

export default App;
```

## Полезные ссылки

- [Документация MUI](https://mui.com/)
- [Примеры компонентов](https://mui.com/components/)
- [Руководство по настройке темы](https://mui.com/customization/theming/)
- [Исходный код на GitHub](https://github.com/mui/material-ui)
