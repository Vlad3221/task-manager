<template>
  <main>
    <span>Какой то контент</span>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../stores/tasks'

const store = useTaskStore()
const { tasks } = storeToRefs(store)

// доступ к переменной `store` в любом месте компонента ✨
// store.addTodo(
//     [
//       {
//         sectionId: 1,
//         id: 1,
//         title: "Разработка функций для таблиц и задач",
//         developer: "Владислав Шалаев",
//         owner: "Администратор",
//         timeDevelop: "10 ч.",
//         timeEnd: "01.03.2024",
//         prior: 10
//       }
//     ]
// )
console.log(tasks)
</script>