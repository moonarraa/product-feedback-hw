# Product Feedback Board

SPA-приложение для сбора и голосования за предложения по улучшению продукта.

## 🚀 Возможности
- Добавление предложений (фидбеков)
- Удаление предложений
- Голосование (лайк/дизлайк) за каждую идею
- Сортировка по дате или популярности
- Подсчет общего количества фидбеков

## 🧩 Уровни реализации

### 1. useState (Базовый)
- Локальное состояние в компоненте App
- Добавление и удаление предложений

### 2. Context API + useReducer (Средний)
- Глобальное состояние через Context
- Лайки/дизлайки, сортировка, счетчик
- Разделение на store, components

## 🗂 Структура
```
src/
  app/
    App.jsx
  modules/
    feedback/
      components/
        FeedbackForm.jsx
        FeedbackList.jsx
        FeedbackItem.jsx
        FeedbackStats.jsx
        FeedbackFilter.jsx
      store/
        FeedbackContext.jsx
```

## 🛠️ Технологии
- React
- Context API + useReducer
- Vite

## ⚡️ Запуск

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите dev-сервер:
   ```bash
   npm run dev
   ```
3. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

---

## 📦 Планы на будущее (уровень 3)
- Zustand store
- Категории, редактирование, сохранение в localStorage
- Темная/светлая тема
- Анимации, drag-and-drop, экспорт/импорт

---

**Автор:** NFactorial HW
