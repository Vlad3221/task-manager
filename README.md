# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

# Release version 1.0
```sh
[EN]

Release version 1.0:
- Creation of tasks with the possibility of initial configuration
- Delete any task
- Moving tasks along the columns of development stages
- Editing tasks with a simple, intuitive interface. possibilities for changing: 1) Task name, 2) Task executor, 3) Development time, 4) Delivery date, 5) priority

The implementation of version 1.0 is based on saving in the user's local history

[RU]

Релиз версии 1.0:
- Создание задач с возможностью изначальной настройки
- Удаление любой задачи
- Перемещение задач по столбикам стадий разработок
- Редактирование тасков с простым понятным интерфейсом. возможности изменения: 1) Название задачи, 2) Исполнитель задачи, 3) Время разработки, 4) Дата сдачи, 5) приоритет

Реализация версии 1.0 построена на сохранении в локальной истории пользователя
```