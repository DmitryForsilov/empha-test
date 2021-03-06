# Empha Test Exercise

SPA, которое позволяет авторизоваться в сервисе emphasoft и выводить список юзеров.

username: test_super

password: Nf<U4f<rDbtDxAPn

[Link to deploy](https://empha-test.vercel.app/)

## Features:
- Форма авторизации. Валидация - оба поля обязательные. Рендеринг ошибок валидации и ошибок при сабмите. Во время сабмита форма задизейблена и рендерится прелоадер.
- Если авторизация прошла успешно, происходит редирект на страницу "Users". При этом текущий url не сохраняется в browser history.
- На странице "Users" при клике на кнопку "Show users" рендерится список юзеров. Во время запроса крутится прелоадер и кнопка задизейблена. Если запрос завершится с ошибкой, ошибка будет отрендерена. Каждый юзер отображается с id и username.
- Список юзеров можно сортировать по id. По увеличению и по убыванию.
- Список юзеров можно фильтровать по введеному фильтру. Регистр букв учитывается. Если после фильтрации нечего рендерить, будет отображаться сообщение об этом.
- При клике по кнопке логаута показывается окно с подтверждением выхода. Если подтверждение будет, произойдет редирект на страницу авторизации. При этом текущий url не сохраняется в browser history.

## Used in project:
- Javascript
- React
- React Bootstrap
- Redux Toolkit
- Formik
- Axios
- Lodash

## Clone the project:
```
git clone https://github.com/DmitryForsilov/empha-test.git
```

## Install deps:
```
npm i
```

## Start:
```
npm start
```
