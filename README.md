# Frontend Intership Base Project 2022

Базовый проект для стажировки

# Основые ссылки

- [Дизайн банка](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=33%3A35654)
- [Stoplight](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjc3NzQxNjY-get-api-core-profile)
- [Требования в Confluence](https://confa.kode.ru/display/SKIL/Skillbox-Space+Home?src=spacemenu)

# Основные команды

## Запуск проекта

Установите на телефон приложение [ExpoGo](https://expo.dev/client)

### Установите зависимости

`$ yarn`

### Запустите проект

`$ yarn start`

`$ yarn storybook-watcher` - для обновления списка stories

### Считайте QR код вашим телефоном

#### Сброс кеша metro bundler

`$ yarn start --clear`

# Структруа проекта

```
root
- features // работа с данными
-- hooks
- ui // общие переиспользуемые компонеты
-- organisms
-- molecules
-- atoms
- flows // бизнес флоу
-- flow-name
--- ui // ui относящийся только к конкретному flow
---- organisms
---- molecules
---- atoms
```
