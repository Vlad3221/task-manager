<template>
  <div
      v-if="created == true"
      class="tab-content-projects-slider-card-tasks__block tab-content-projects-slider-card-tasks-block create"
      @click="openCheck = true"
  >
    <span class="material-symbols-outlined">add</span>
    <span>Добавить</span>

  </div>
    <div class="task-created-block" :class="{open: openCheck}">
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
          <input v-model="priorityTask" class="modal-settings-block__input" placeholder="-">
        </div>
        <hr/>
        <div class="modal-settings-block__line modal-settings-block-line">
          <span class="modal-settings-block__title">Описание: </span>
          <textarea v-model="descriptionTask" class="modal-settings-block__input" rows="15"  placeholder="-"></textarea>
        </div>
        <button class="button-create-task" @click="createTask()">Создать</button>
      </div>
    </div>
  <div
      v-if="created == false"
      class="tab-content-projects-slider-card-tasks__block tab-content-projects-slider-card-tasks-block"
      v-bind="$attrs">
    <div
        class="tab-content-projects-slider-card-tasks-block__header tab-content-projects-slider-card-tasks-block-header">
      <span
          class="tab-content-projects-slider-card-tasks-block-header__icon tab-content-projects-slider-card-tasks-block-header-icon material-symbols-outlined green">crisis_alert</span>
      <span
          class="tab-content-projects-slider-card-tasks-block-header__title tab-content-projects-slider-card-tasks-block-header-title">
        {{ taskTitle }}
      </span>
    </div>
    <div class="tab-content-projects-slider-card-tasks-block-description">
      <span
          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Исполнитель:</span>
      <span
          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
        {{ developer }}
      </span>
    </div>
    <div class="tab-content-projects-slider-card-tasks-block-description">
      <span
          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Назначил:</span>
      <span
          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
        {{ owner }}
      </span>
    </div>
    <div class="tab-content-projects-slider-card-tasks-block-description">
      <span
          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Время разработки:</span>
      <span
          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
        {{ timeDevelopment }}
      </span>
    </div>
    <div class="tab-content-projects-slider-card-tasks-block-description">
      <span
          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Дата сдачи:</span>
      <span
          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
        {{ timeEnd }}
      </span>
    </div>
    <div class="tab-content-projects-slider-card-tasks-block-description">
      <span
          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Приоритет:</span>
      <span
          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
        {{ prioritet }} / 10
      </span>
    </div>
    <div class="tab-content-projects-slider-card-tasks-block-description">
      <span
          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Статус:</span>
      <span
          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
        {{ status }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    created: Boolean,
    taskTitle: String,
    developer: String,
    owner: String,
    timeDevelopment: String,
    timeEnd: String,
    prioritet: Number,
    status: String
  },
  data() {
    return {
      login: 'Владислав Шалаев',
      openCheck: false,
      titleTask: '',
      developerTask: '',
      developerTimeTask: '',
      timeTask: '',
      priorityTask: '',
      descriptionTask: ''
    }
  },
  methods: {
    exitCreateTask() {
      this.openCheck = false
      this.titleTask = ''
      this.developerTask = ''
      this.developerTimeTask = ''
      this.timeTask = ''
      this.priorityTask = ''
      this.descriptionTask = ''
    },

    createTask() {
      this.openCheck = false
      this.titleTask = ''
      this.developerTask = ''
      this.developerTimeTask = ''
      this.timeTask = ''
      this.priorityTask = ''
      this.descriptionTask = ''
    }
  }
}
</script>
<style lang="stylus" scoped src="./index.styl"></style>