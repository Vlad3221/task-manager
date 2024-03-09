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
                  aria-selected="false"
                  @click="exitModal()">
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
                  aria-selected="true"
                  @click="exitModal()">
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
                  aria-selected="false"
                  @click="exitModal()">
            Доска
          </button>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div id="preparation-tab-pane" class="tab-pane fade" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div class="row tab-content__projects-slider tab-content-projects-slider">
            <task-section icon="avg_pace" color-icon="orange" title="Подготовка задач">
              <task-card :created="true" @click="openModalCreate()">
                <template v-slot:taskSettings>
                  <task-settings
                      :created="true"
                      :login="login"
                  />
                </template>
              </task-card>
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
                    :rating="task.prior"
                    :status="statusTask(task.sectionId)"
                    draggable="true"
                    :created="false"
                    :done-check="task.done"
                    @click="openModalCheck(task.id)"
                    @dragstart="startDrag($event, task)"
                >
                  <template v-slot:taskDone>
                    <custom-checkbox :is-checked="task.done" @click="toggleDoneTask(task.id)"/>
                  </template>
                  <template v-slot:taskSettings>
                    <task-settings
                        :created="false"
                        :owner="owner"
                        :check-developer-task="checkDeveloperTask"
                        :check-developer-time-task="checkDeveloperTimeTask"
                        :check-time-task="checkTimeTask"
                        :check-priority-task="checkPriorityTask"
                        :task-check-title="taskCheckTitle"
                        :check-description-task="checkDescriptionTask"
                        @update:title="taskCheckTitle = $event"
                        @update:developer="checkDeveloperTask = $event"
                        @update:timeTask="checkDeveloperTimeTask = $event"
                        @update:timeTaskEnd="checkTimeTask = $event"
                        @update:priority="checkPriorityTask = $event"
                        @update:description="checkDescriptionTask = $event"
                    >
                      <div class="buttons-modal">
                        <div class="buttons-modal__settings button-modal-settings" @click="refactorTask(taskId)">
                          Сохранить
                          изменения
                        </div>
                        <div class="buttons-modal__settings red button-modal-settings" @click="deleteTask(taskId)">
                          Удалить
                        </div>
                      </div>
                    </task-settings>
                  </template>
                </task-card>
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
              <template
                  v-for="task in tasks.slice().reverse().filter((item) => item.sectionId === sectionValue.dataId)"
                  :key="task.id"
              >
                <task-card
                    :task-title="task.title"
                    :developer="task.developer"
                    :owner="task.owner"
                    :time-development="task.timeDevelop"
                    :time-end="task.timeEnd"
                    :rating="task.prior"
                    :status="statusTask(task.sectionId)"
                    draggable="true"
                    :created="false"
                    :done-check="task.done"
                    @click="openModalCheck(task.id)"
                    @dragstart="startDrag($event, task)"
                >
                  <template v-slot:taskDone>
                    <custom-checkbox :is-checked="task.done" @click="toggleDoneTask(task.id)"/>
                  </template>
                  <template v-slot:taskSettings>
                    <task-settings
                        :created="false"
                        :owner="owner"
                        :check-developer-task="checkDeveloperTask"
                        :check-developer-time-task="checkDeveloperTimeTask"
                        :check-time-task="checkTimeTask"
                        :check-priority-task="checkPriorityTask"
                        :task-check-title="taskCheckTitle"
                        :check-description-task="checkDescriptionTask"
                        @update:title="taskCheckTitle = $event"
                        @update:developer="checkDeveloperTask = $event"
                        @update:timeTask="checkDeveloperTimeTask = $event"
                        @update:timeTaskEnd="checkTimeTask = $event"
                        @update:priority="checkPriorityTask = $event"
                        @update:description="checkDescriptionTask = $event"
                    >
                      <div class="buttons-modal">
                        <div class="buttons-modal__settings button-modal-settings" @click="refactorTask(taskId)">
                          Сохранить
                          изменения
                        </div>
                        <div class="buttons-modal__settings red button-modal-settings" @click="deleteTask(taskId)">
                          Удалить
                        </div>
                      </div>
                    </task-settings>
                  </template>
                </task-card>
              </template>
            </task-section>
          </div>
        </div>
      </div>
    </section>
  </block-default>
</template>

<script lang="ts">
import BlockDefault from '@/components/BlockDefault/index.vue'
import TaskSection from '@/components/TaskSection/index.vue'
import TaskCard from '@/components/TaskCard/index.vue'
import TaskSettings from '@/components/TaskSettings/index.vue'
import CustomCheckbox from "@/components/CustomCheckbox/index.vue";

import {storeToRefs} from 'pinia'
import {useTaskStore} from '@/stores/tasks'
import {useGlobalStore} from '@/stores/modal';

const store = useTaskStore()
const {tasks} = storeToRefs(store)
const globalStore = useGlobalStore();

export default {
  components: {
    CustomCheckbox,
    BlockDefault,
    TaskCard,
    TaskSection,
    TaskSettings
  },
  data() {
    return {
      login: "Владислав Шалаев",
      tasks: tasks,
      taskId: 0,
      taskCheckTitle: '',
      owner: '',
      checkDeveloperTask: '',
      checkDeveloperTimeTask: '',
      checkTimeTask: '',
      checkPriorityTask: 0,
      checkDescriptionTask: '',
      checkDoneTask: false,
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
      store.updateTaskSection(itemID, sectionId)
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
    },

    openModalCreate() {
      globalStore.setIsOpenCreate(true);
    },

    openModalCheck(taskId) {
      globalStore.setIsOpenCheck(true);
      this.tasks.forEach(v => {
        if (v.id === taskId) {
          this.taskId = taskId
          this.taskCheckTitle = v.title
          this.owner = v.owner
          this.checkDeveloperTask = v.developer
          this.checkDeveloperTimeTask = v.timeDevelop
          this.checkTimeTask = v.timeEnd
          this.checkPriorityTask = v.prior
          this.checkDescriptionTask = v.description
        }
      })
    },

    exitModal() {
      globalStore.setIsOpenCreate(false)
      globalStore.setIsOpenCheck(false)
    },

    deleteTask(taskId) {
      store.removeTask(taskId)
      globalStore.setIsOpenCheck(false)
    },

    refactorTask(taskId) {
      this.tasks.forEach(v => {
        if (v.id === taskId) {
          store.updateTaskInformation(v.id, this.taskCheckTitle, this.checkDeveloperTask, this.checkDeveloperTimeTask, this.checkTimeTask, this.checkPriorityTask, this.checkDescriptionTask)
          globalStore.setIsOpenCheck(false)
        }
      })
    },

    toggleDoneTask(taskId) {
      this.tasks.forEach(v => {
        if (v.id === taskId) {
          this.checkDoneTask = !v.done
          store.toggleTaskDone(v.id, this.checkDoneTask)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>
