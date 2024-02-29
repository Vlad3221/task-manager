<template>
  <block-default>
    <h5>Доска задач</h5>
    <section>
      <ul id="myTab" class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button id="preparation-tab"
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#preparation-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="preparation-tab-pane"
                  aria-selected="false">
            Подготовка задач
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button id="home-tab"
                  class="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true">
            Мои задачи
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button id="table-tab"
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#table-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="table-tab-pane"
                  aria-selected="false">
            Доска
          </button>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div id="home-tab-pane"
             class="tab-pane fade show active"
             role="tabpanel"
             aria-labelledby="home-tab"
             tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section icon="avg_pace" color-icon="orange" title="ожидают подтверждения">
              <task-card
                  task-title="Создать таблицу в Task Manager"
                  developer="Владислав Шалаев"
                  owner="Павел Пучков"
                  time-development="2 нед."
                  time-end="20.03.2024"
                  :prioritet="3"
                  status="Обработка"
              />
            </task-section>
            <task-section icon="timer_off" color-icon="red" title="Просроченные"></task-section>
            <task-section icon="pause_circle" color-icon="orange" title="Приостановлено"></task-section>
            <task-section icon="ink_pen" color-icon="blue" title="Делаю сейчас"></task-section>
            <task-section icon="bug_report" color-icon="orange" title="Код ревью / Тестирование"></task-section>
            <task-section icon="event_available" color-icon="green" title="Готово"></task-section>
          </div>
        </div>
        <div id="preparation-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section icon="avg_pace" color-icon="orange" title="Задачи Junior">
              <task-card :created="true"/>
            </task-section>
          </div>
        </div>
        <div id="table-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section icon="avg_pace" color-icon="orange" title="ожидают подтверждения">
              <task-card
                  task-title="Дота 2"
                  developer="Павел Пучков"
                  owner="Владислав Шалаев"
                  time-development="2 ч."
                  time-end="29.03.2024"
                  :prioritet="9"
                  status="Обработка"
              />
              <task-card
                  task-title="Дота 2"
                  developer="Павел Пучков"
                  owner="Владислав Шалаев"
                  time-development="2 ч."
                  time-end="29.03.2024"
                  :prioritet="9"
                  status="Обработка"
              />
              <task-card
                  task-title="Дота 2"
                  developer="Павел Пучков"
                  owner="Владислав Шалаев"
                  time-development="2 ч."
                  time-end="29.03.2024"
                  :prioritet="9"
                  status="Обработка"
              />
              <task-card
                  task-title="Дота 2"
                  developer="Павел Пучков"
                  owner="Владислав Шалаев"
                  time-development="2 ч."
                  time-end="29.03.2024"
                  :prioritet="9"
                  status="Обработка"
              />
              <task-card
                  task-title="Создать таблицу в Task Manager"
                  developer="Владислав Шалаев"
                  owner="Павел Пучков"
                  time-development="2 нед."
                  time-end="20.03.2024"
                  :prioritet="3"
                  status="Обработка"
              />
            </task-section>
            <task-section icon="timer_off" color-icon="red" title="Просроченные">
              <task-card
                  task-title="Дота 2"
                  developer="Павел Пучков"
                  owner="Владислав Шалаев"
                  time-development="2 ч."
                  time-end="29.03.2024"
                  :prioritet="9"
                  status="Обработка"
              />
            </task-section>
            <task-section icon="pause_circle" color-icon="orange" title="Приостановлено"></task-section>
            <task-section icon="ink_pen" color-icon="blue" title="Делаю сейчас"></task-section>
            <task-section icon="bug_report" color-icon="orange" title="Код ревью / Тестирование"></task-section>
            <task-section icon="event_available" color-icon="green" title="Готово"></task-section>
          </div>
        </div>
      </div>
    </section>
  </block-default>
</template>

<script setup lang="ts">
import BlockDefault from '../../components/BlockDefault/index.vue'
import TaskCard from '../../components/TaskCard/index.vue'
import TaskSection from '../../components/TaskSection/index.vue'
</script>

<style lang="stylus" scoped src="./index.styl"></style>
