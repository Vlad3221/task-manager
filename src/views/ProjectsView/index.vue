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
                v-for="sectionValue in section"
                :key="sectionValue.dataId"
                :icon="sectionValue.icon"
                :color-icon="sectionValue.iconColor"
                :title="sectionValue.sectionTitle"
                @drop="onDrop($event, sectionValue.dataId)"
                @dragover.prevent
                @dragenter.prevent
            >
              <template
                  v-for="task in tasks.slice().reverse().filter((item) => item.sectionId === sectionValue.dataId)"
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
                    :status="statusTask(task.sectionId)"
                    draggable="true"
                    @dragstart="startDrag($event, task)"
                />
              </template>
            </task-section>
          </div>
        </div>
        <div id="table-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section
                v-for="sectionValue in section"
                :key="sectionValue.dataId"
                :icon="sectionValue.icon"
                :color-icon="sectionValue.iconColor"
                :title="sectionValue.sectionTitle"
                @drop="onDrop($event, sectionValue.dataId)"
                @dragover.prevent
                @dragenter.prevent
            >
              <task-card
                  v-for="task in tasks.slice().reverse().filter((item) => item.sectionId === sectionValue.dataId)"
                  :key="task.id"
                  :task-title="task.title"
                  :developer="task.developer"
                  :owner="task.owner"
                  :time-development="task.timeDevelop"
                  :time-end="task.timeEnd"
                  :prioritet="task.prior"
                  :status="statusTask(task.sectionId)"
                  draggable="true"
                  @dragstart="startDrag($event, task)"
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
import taskSection from "@/components/TaskSection/index.vue";

export default {
  components: {
    BlockDefault,
    TaskCard,
    TaskSection
  },
  data() {
    return {
      login: "Владислав Шалаев",
      section: [
        {
          dataId: 1,
          icon: "avg_pace",
          iconColor: "orange",
          sectionTitle: "Ожидают подтверждения"
        },
        {
          dataId: 2,
          icon: "timer_off",
          iconColor: "red",
          sectionTitle: "Просроченные"
        },
        {
          dataId: 3,
          icon: "pause_circle",
          iconColor: "orange",
          sectionTitle: "Приостановлено"
        },
        {
          dataId: 4,
          icon: "ink_pen",
          iconColor: "blue",
          sectionTitle: "В работе"
        },
        {
          dataId: 5,
          icon: "bug_report",
          iconColor: "orange",
          sectionTitle: "Код ревью / Тестирование"
        },
        {
          dataId: 6,
          icon: "event_available",
          iconColor: "green",
          sectionTitle: "Готово"
        }
      ],
      tasks: [
        {
          sectionId: 1,
          id: 1,
          title: "Разработка функций для таблиц и задач",
          developer: "Владислав Шалаев",
          owner: "Администратор",
          timeDevelop: "10 ч.",
          timeEnd: "01.03.2024",
          prior: 10
        },
        {
          sectionId: 1,
          id: 2,
          title: "Функция создания таска",
          developer: "Владислав Шалаев",
          owner: "Администратор",
          timeDevelop: "2 ч.",
          timeEnd: "01.03.2024",
          prior: 2
        },
        {
          sectionId: 1,
          id: 3,
          title: "Функция удаления таска",
          developer: "Владислав Шалаев",
          owner: "Администратор",
          timeDevelop: "2 ч.",
          timeEnd: "01.03.2024",
          prior: 2
        },
        {
          sectionId: 1,
          id: 4,
          title: "Функция редактирования таска",
          developer: "Владислав Шалаев",
          owner: "Администратор",
          timeDevelop: "2 ч.",
          timeEnd: "01.03.2024",
          prior: 2
        },
        {
          sectionId: 6,
          id: 5,
          title: "Разработать привязку таска к таблицам",
          developer: "Владислав Шалаев",
          owner: "Администратор",
          timeDevelop: "2 ч.",
          timeEnd: "01.03.2024",
          prior: 2
        },
        {
          sectionId: 6,
          id: 6,
          title: "Функция перемещения таска в другие столбцы",
          developer: "Владислав Шалаев",
          owner: "Администратор",
          timeDevelop: "2 ч.",
          timeEnd: "01.03.2024",
          prior: 7
        },
        {
          sectionId: 6,
          id: 7,
          title: "Проверка на другого исполнителя",
          developer: "Менеджер",
          owner: "Администратор",
          timeDevelop: "2 ч.",
          timeEnd: "01.03.2024",
          prior: 2
        }
      ]
    }
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },

    onDrop(evt, sectionId) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.tasks.find((item) => item.id == itemID)
      item.sectionId = sectionId
    },

    statusTask(section) {
      var status = 'Ожидание'

      if (section == 1) {
        status = 'Ожидание'
      } else if (section == 2) {
        status = 'Просрочено'
      } else if (section == 3) {
        status = 'Ожидание'
      } else if (section == 4) {
        status = 'В работе'
      } else if (section == 5) {
        status = 'Ожидание'
      } else if (section == 6) {
        status = 'Готово'
      }

      return status
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>
