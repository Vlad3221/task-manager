<template>
  <div
      v-if="created == true"
      class="tab-content-projects-slider-card-tasks__block tab-content-projects-slider-card-tasks-block create"
      v-bind="$attrs"
  >
    <span class="material-symbols-outlined">add</span>
    <span>Добавить</span>
  </div>
  <slot name="taskSettings"/>
  <div
      v-if="created == false"
      class="tab-content-projects-slider-card-tasks__block tab-content-projects-slider-card-tasks-block"
      :class="{done: doneCheck}">
    <div
        class="tab-content-projects-slider-card-tasks-block__header tab-content-projects-slider-card-tasks-block-header">
      <!--      <span-->
      <!--          class="tab-content-projects-slider-card-tasks-block-header__icon tab-content-projects-slider-card-tasks-block-header-icon material-symbols-outlined green">-->
      <!--        crisis_alert-->
      <!--      </span>-->
      <slot name="taskDone"/>
      <span
          class="tab-content-projects-slider-card-tasks-block-header__title tab-content-projects-slider-card-tasks-block-header-title"
          v-bind="$attrs">
        {{ taskTitle }}
      </span>
    </div>
    <div v-bind="$attrs">
      <div
          class="tab-content-projects-slider-card-tasks-block-description">
          <span
              class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Исполнитель:</span>
        <span
            class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
            {{ developer }}
          </span>
      </div>
      <!--    <div class="tab-content-projects-slider-card-tasks-block-description">-->
      <!--      <span-->
      <!--          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Назначил:</span>-->
      <!--      <span-->
      <!--          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">-->
      <!--        {{ owner }}-->
      <!--      </span>-->
      <!--    </div>-->
      <!--    <div class="tab-content-projects-slider-card-tasks-block-description">-->
      <!--      <span-->
      <!--          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Время разработки:</span>-->
      <!--      <span-->
      <!--          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">-->
      <!--        {{ timeDevelopment }}-->
      <!--      </span>-->
      <!--    </div>-->
      <!--    <div class="tab-content-projects-slider-card-tasks-block-description">-->
      <!--      <span-->
      <!--          class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Дата сдачи:</span>-->
      <!--      <span-->
      <!--          class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">-->
      <!--        {{ timeEnd }}-->
      <!--      </span>-->
      <!--    </div>-->
      <div class="tab-content-projects-slider-card-tasks-block-description">
            <span
                class="tab-content-projects-slider-card-tasks-block-description__context tab-content-projects-slider-card-tasks-block-description-context">Приоритет:</span>
        <span
            class="tab-content-projects-slider-card-tasks-block-description__value tab-content-projects-slider-card-tasks-block-description-value">
              {{ rating }} / 10
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
    rating: Number,
    status: String,
    doneCheck: Boolean
  }
}
</script>
<style lang="stylus" scoped src="./index.styl"></style>