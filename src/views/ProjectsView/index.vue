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
        <div id="preparation-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section icon="avg_pace" color-icon="orange" title="Задачи Junior">
              <task-card :created="true"/>
            </task-section>
          </div>
        </div>
        <div id="home-tab-pane"
             class="tab-pane fade show active"
             role="tabpanel"
             aria-labelledby="home-tab"
             tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section
                v-for="sectionValue in taskSection"
                :key="sectionValue.dataId"
                :icon="sectionValue.icon"
                :color-icon="sectionValue.iconColor"
                :title="sectionValue.sectionTitle"
            >
              <template
                  v-for="task in sectionValue.dataItem.slice().reverse()"
                  :key="task.id"
              >
                <task-card
                    v-if="task.developer == login"
                    :task-title="task.title"
                    :developer="task.developer"
                    :owner="task.owner"
                    :time-development="task.timeDevelop"
                    :time-end="task.timeEnd"
                    :prioritet="task.prior"
                    :status="task.status"
                />
              </template>
            </task-section>
          </div>
        </div>
        <div id="table-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section
                v-for="sectionValue in taskSection"
                :key="sectionValue.dataId"
                :icon="sectionValue.icon"
                :color-icon="sectionValue.iconColor"
                :title="sectionValue.sectionTitle"
            >
              <task-card
                  v-for="task in sectionValue.dataItem.slice().reverse()"
                  :key="task.id"
                  :task-title="task.title"
                  :developer="task.developer"
                  :owner="task.owner"
                  :time-development="task.timeDevelop"
                  :time-end="task.timeEnd"
                  :prioritet="task.prior"
                  :status="task.status"
              />
            </task-section>
          </div>
        </div>
      </div>
    </section>
  </block-default>
</template>

<script lang="ts">
import BlockDefault from '../../components/BlockDefault/index.vue'
import TaskCard from '../../components/TaskCard/index.vue'
import TaskSection from '../../components/TaskSection/index.vue'

export default {
  components: {
    BlockDefault,
    TaskCard,
    TaskSection
  },
  data() {
    return {
      login: "Владислав Шалаев",
      taskSection: [
        {
          dataId: "1",
          icon: "avg_pace",
          iconColor: "orange",
          sectionTitle: "ожидают подтверждения",
          dataItem: [
            {
              sectionId: 1,
              id: 1,
              title: "Разработка функций для таблиц и задач",
              developer: "Владислав Шалаев",
              owner: "Администратор",
              timeDevelop: "10 ч.",
              timeEnd: "01.03.2024",
              prior: 10,
              status: "Ожидание"
            },
            {
              sectionId: 1,
              id: 2,
              title: "Функция создания таска",
              developer: "Владислав Шалаев",
              owner: "Администратор",
              timeDevelop: "2 ч.",
              timeEnd: "01.03.2024",
              prior: 2,
              status: "Ожидание"
            },
            {
              sectionId: 1,
              id: 3,
              title: "Функция удаления таска",
              developer: "Владислав Шалаев",
              owner: "Администратор",
              timeDevelop: "2 ч.",
              timeEnd: "01.03.2024",
              prior: 2,
              status: "Ожидание"
            },
            {
              sectionId: 1,
              id: 4,
              title: "Функция редактирования таска",
              developer: "Владислав Шалаев",
              owner: "Администратор",
              timeDevelop: "2 ч.",
              timeEnd: "01.03.2024",
              prior: 2,
              status: "Ожидание"
            },
            {
              sectionId: 1,
              id: 5,
              title: "Разработать привязку таска к таблицам",
              developer: "Владислав Шалаев",
              owner: "Администратор",
              timeDevelop: "2 ч.",
              timeEnd: "01.03.2024",
              prior: 2,
              status: "Ожидание"
            },
            {
              sectionId: 1,
              id: 7,
              title: "Проверка на другого исполнителя",
              developer: "Менеджер",
              owner: "Администратор",
              timeDevelop: "2 ч.",
              timeEnd: "01.03.2024",
              prior: 2,
              status: "Ожидание"
            }
          ]
        },
        {
          dataId: "2",
          icon: "timer_off",
          iconColor: "red",
          sectionTitle: "Просроченные",
          dataItem: []
        },
        {
          dataId: "3",
          icon: "pause_circle",
          iconColor: "orange",
          sectionTitle: "Приостановлено",
          dataItem: []
        },
        {
          dataId: "4",
          icon: "ink_pen",
          iconColor: "blue",
          sectionTitle: "В работе",
          dataItem: [
            {
              sectionId: 1,
              id: 6,
              title: "Функция перемещения таска в другие столбцы",
              developer: "Владислав Шалаев",
              owner: "Администратор",
              timeDevelop: "2 ч.",
              timeEnd: "01.03.2024",
              prior: 7,
              status: "В работе"
            }
          ]
        },
        {
          dataId: "5",
          icon: "bug_report",
          iconColor: "orange",
          sectionTitle: "Код ревью / Тестирование",
          dataItem: []
        },
        {
          dataId: "6",
          icon: "event_available",
          iconColor: "green",
          sectionTitle: "Готово",
          dataItem: []
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>
