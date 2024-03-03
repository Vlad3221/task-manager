<template>
  <div v-if="created == true" class="task-created-block" :class="{open: openCreate}">
    <span class="task-created-block__header task-created-block-header">TManager</span>
    <div class="button-modal-close" @click="exitCreateTask()">Закрыть</div>
    <hr>
    <div class="modal-settings-block">
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Наименование задачи: </span>
        <input v-model="titleTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Владелец: </span>
        <div class="modal-settings-block__input disabled"> {{ login }}</div>
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Исполнитель: </span>
        <input v-model="developerTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Время разработки: </span>
        <input v-model="developerTimeTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Дата сдачи: </span>
        <input v-model="timeTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Приоритет: </span>
        <input v-model="priorityTask"
               type="number"
               max="10"
               min="0"
               class="modal-settings-block__input"
               placeholder="-"
        >
      </div>
      <hr/>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Описание: </span>
        <textarea v-model="descriptionTask" class="modal-settings-block__input" rows="15" placeholder="-"></textarea>
      </div>
      <button class="button-create-task" @click="createTask()">Создать</button>
    </div>
  </div>
  <div v-if="created == false" class="task-created-block" :class="{open: openCheck}">
    <span class="task-created-block__header task-created-block-header">TManager</span>
    <div class="button-modal-close" @click="exitCheckTask()">Закрыть</div>
    <hr>
    <div class="modal-settings-block">
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Наименование задачи: </span>
        <input :value="taskCheckTitle" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Владелец: </span>
        <div class="modal-settings-block__input disabled">{{ owner }}</div>
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Исполнитель: </span>
        <input :value="checkDeveloperTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Время разработки: </span>
        <input :value="checkDeveloperTimeTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Дата сдачи: </span>
        <input :value="checkTimeTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Приоритет: </span>
        <input :value="checkPriorityTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <hr/>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Описание: </span>
        <textarea value="checkDescriptionTask"
                  class="modal-settings-block__input"
                  rows="15"
                  placeholder="-"
        />
      </div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
// import { storeToRefs } from 'pinia'
import {useTaskStore} from '@/stores/tasks'

const store = useTaskStore()
// const { tasks } = storeToRefs(store)

import {useGlobalStore} from '@/stores/modal';

const globalStore = useGlobalStore()
export default {
  props: {
    created: Boolean,
    login: String,
    taskCheckTitle: String,
    owner: String,
    checkDeveloperTask: String,
    checkDeveloperTimeTask: String,
    checkTimeTask: String,
    checkPriorityTask: String
  },
  data() {
    return {
      openCreate: globalStore.getIsModalCreateOpen,
      openCheck: globalStore.getIsModalCheckOpen,
      titleTask: '',
      developerTask: '',
      developerTimeTask: '',
      timeTask: '',
      priorityTask: 0,
      descriptionTask: ''
    }
  },
  created() {
    this.$watch(() => globalStore.getIsModalCreateOpen, (newValue) => {
      this.openCreate = newValue
    });

    this.$watch(() => globalStore.getIsModalCheckOpen, (newValue) => {
      this.openCheck = newValue
    });
  },
  methods: {
    exitCreateTask() {
      this.titleTask = ''
      this.developerTask = ''
      this.developerTimeTask = ''
      this.timeTask = ''
      this.priorityTask = 0
      this.descriptionTask = ''
      globalStore.setIsOpenCreate(false)
    },

    exitCheckTask() {
      globalStore.setIsOpenCheck(false)
    },

    createTask() {
      const timeStamp = Date.now()

      const task = {
        sectionId: 1,
        id: timeStamp,
        title: this.titleTask,
        developer: this.developerTask,
        owner: this.login,
        timeDevelop: this.developerTimeTask,
        timeEnd: this.timeTask,
        prior: this.priorityTask
      }

      store.addTask(task)

      this.titleTask = ''
      this.developerTask = ''
      this.developerTimeTask = ''
      this.timeTask = ''
      this.priorityTask = 0
      this.descriptionTask = ''
      globalStore.setIsOpenCreate(false);
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>