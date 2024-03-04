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
        <input v-model="taskCheckTitleCheck" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Владелец: </span>
        <div class="modal-settings-block__input disabled">{{ owner }}</div>
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Исполнитель: </span>
        <input v-model="checkDeveloperTaskCheck" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Время разработки: </span>
        <input v-model="checkDeveloperTimeTaskCheck" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Дата сдачи: </span>
        <input v-model="checkTimeTaskCheck" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Приоритет: </span>
        <input v-model="checkPriorityTaskCheck" type="number" class="modal-settings-block__input" placeholder="-">
      </div>
      <hr/>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Описание: </span>
        <textarea v-model="checkDescriptionTaskCheck"
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
    checkPriorityTask: Number,
    checkDescriptionTask: String
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
      descriptionTask: '',
      taskCheckTitleCheck: this.taskCheckTitle,
      checkDeveloperTaskCheck: this.checkDeveloperTask,
      checkDeveloperTimeTaskCheck: this.checkDeveloperTimeTask,
      checkTimeTaskCheck: this.checkTimeTask,
      checkPriorityTaskCheck: this.checkPriorityTask,
      checkDescriptionTaskCheck: this.checkDescriptionTask
    }
  },
  watch: {
    taskCheckTitle(newTitle) {
      this.taskCheckTitleCheck = newTitle;
    },
    taskCheckTitleCheck(newTitle) {
      this.$emit('update:title', newTitle);
    },

    checkDeveloperTask(newDeveloper) {
      this.checkDeveloperTaskCheck = newDeveloper;
    },
    checkDeveloperTaskCheck(newDeveloper) {
      this.$emit('update:developer', newDeveloper);
    },

    checkDeveloperTimeTask(newTimeTask) {
      this.checkDeveloperTimeTaskCheck = newTimeTask;
    },
    checkDeveloperTimeTaskCheck(newTimeTask) {
      this.$emit('update:timeTask', newTimeTask);
    },

    checkTimeTask(newTimeTaskEnd) {
      this.checkTimeTaskCheck = newTimeTaskEnd;
    },
    checkTimeTaskCheck(newTimeTaskEnd) {
      this.$emit('update:timeTaskEnd', newTimeTaskEnd);
    },

    checkPriorityTask(newPriority) {
      this.checkPriorityTaskCheck = newPriority;
    },
    checkPriorityTaskCheck(newPriority) {
      this.$emit('update:priority', newPriority);
    },

    checkDescriptionTask(newDescription) {
      this.checkDescriptionTaskCheck = newDescription;
    },
    checkDescriptionTaskCheck(newDescription) {
      this.$emit('update:description', newDescription);
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
        prior: this.priorityTask,
        description: this.descriptionTask
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