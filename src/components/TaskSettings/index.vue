<template>
  <div v-if="created == true" class="task-created-block" :class="{open: openCreate}">
    <div class="task-created-block__header task-created-block-header">
      <div class="task-created-block__header task-created-block-header">
        <div class="status"></div>
        <div class="navigation">
          <div
              class="navigation__button navigation-button"
              @click="exitCreateTask()"
          >
          <span class="material-symbols-outlined">
            login
          </span>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="modal-settings-block">
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Наименование задачи </span>
        <textarea ref="textarea"
                  v-model="titleTask"
                  class="modal-settings-block__input title-create-textarea"
                  maxlength='93'
                  placeholder="-"/>
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Назначил </span>
        <div class="modal-settings-block__input disabled"> {{ login }}</div>
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Исполнитель </span>
        <input v-model="developerTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Время </span>
        <input v-model="developerTimeTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Срок выполнения </span>
        <input v-model="timeTask" class="modal-settings-block__input" placeholder="-">
      </div>
      <div class="modal-settings-block__line modal-settings-block-line">
        <span class="modal-settings-block__title">Приоритет </span>
        <input v-model="priorityTask"
               type="number"
               max="10"
               min="0"
               class="modal-settings-block__input"
               placeholder="-"
               onkeypress="return false"
        >
      </div>
      <hr/>
      <span class="modal-settings-block__title">Описание </span>
      <div class="modal-settings-block__line modal-settings-block-line">
        <textarea ref="textarea"
                  v-model="descriptionTask"
                  class="modal-settings-block__input"
                  placeholder="-"></textarea>
      </div>
      <button class="button-create-task" @click="createTask()">Создать</button>
    </div>
  </div>
  <div v-if="created == false" class="task-created-block" :class="{open: openCheck}">
    <div class="task-created-block__header task-created-block-header">
      <div class="status">
        <div
            class="status__done status-done"
            :class="{done: checkDoneTask}"
            @click="toggleDoneTask()"
        >
        <span class="material-symbols-outlined">
          done
        </span>
          Выполнено
        </div>
      </div>
      <div class="navigation">
        <div class="navigation__button navigation-button disabled">
          <span class="material-symbols-outlined">
            thumb_up
          </span>
        </div>
        <div class="navigation__button navigation-button disabled">
          <span class="material-symbols-outlined">
            content_copy
          </span>
        </div>
        <div class="navigation__button navigation-button disabled">
          <span class="material-symbols-outlined">
            expand_content
          </span>
        </div>
        <div class="navigation__button navigation-button disabled">
          <span class="material-symbols-outlined">
            more_vert
          </span>
        </div>
        <div
            class="navigation__button navigation-button"
            @click="exitCheckTask()"
        >
          <span class="material-symbols-outlined">
            login
          </span>
        </div>
      </div>
    </div>
    <hr>
    <div class="content-task">
      <div class="modal-settings-block">
        <div class="modal-settings-block__line modal-settings-block-line">
          <textarea v-model="taskCheckTitleCheck"
                    maxlength='93'
                    class="modal-settings-block__input title"
                    placeholder="-"/>
        </div>
        <div class="modal-settings-block__line modal-settings-block-line">
          <span class="modal-settings-block__title">Исполнитель </span>
          <input v-model="checkDeveloperTaskCheck" class="modal-settings-block__input" placeholder="-">
        </div>
        <div class="modal-settings-block__line modal-settings-block-line">
          <span class="modal-settings-block__title">Назначил </span>
          <div class="modal-settings-block__input disabled">{{ owner }}</div>
        </div>
        <div class="modal-settings-block__line modal-settings-block-line">
          <span class="modal-settings-block__title">Срок выполнения </span>
          <input v-model="checkTimeTaskCheck" class="modal-settings-block__input" placeholder="-">
        </div>
        <div class="modal-settings-block__line modal-settings-block-line">
          <span class="modal-settings-block__title">Приоритет </span>
          <input v-model="checkPriorityTaskCheck"
                 type="number"
                 max="10"
                 min="0"
                 class="modal-settings-block__input"
                 placeholder="-"
                 onkeypress="return false">
        </div>
      </div>
      <hr>
      <div class="modal-settings-block">
        <div class="modal-settings-block__line modal-settings-block-line">
          <span class="modal-settings-block__title">Время </span>
          <input v-model="checkDeveloperTimeTaskCheck" class="modal-settings-block__input" placeholder="-">
        </div>
      </div>
      <hr>
      <div class="modal-settings-block">
        <span class="modal-settings-block__title">Описание </span>
        <div class="modal-settings-block__line modal-settings-block-line">
        <textarea ref="textarea"
                  v-model="checkDescriptionTaskCheck"
                  class="modal-settings-block__input"
                  placeholder="-"
        />
        </div>
      </div>
      <div class="modal-settings-block subtasks">
        <span class="modal-settings-block__title modal-settings-block subtasks__title">Подзадачи </span>
        <template v-for="task in this.tasks.filter((item) => item.id === taskCheckId)" :key="task.id">
          <div>
            <div v-for="item in task.subtasks"
                 :key="item.id"
                 class="modal-settings-block__subtask modal-settings-block-subtask">
              <input type="checkbox"
                     class="modal-settings-block-subtask__done modal-settings-block-subtask-done"
                     :checked="item.done"
                     @click="toggleDoneSubtask(taskCheckId, item.id, !item.done)">
              <textarea v-model="item.title"
                        class="modal-settings-block-subtask__input modal-settings-block-subtask-input"/>
            </div>
          </div>
        </template>
        <button class="modal-settings-block__add-subtask modal-settings-block-add-subtask"
                @click="addSubtask(taskCheckId)">
          <span class="material-symbols-outlined">
            add_task
          </span>
          Добавить подзадачу
        </button>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {useTaskStore} from '@/stores/tasks'
import {useGlobalStore} from '@/stores/modal';
import {storeToRefs} from "pinia";

const store = useTaskStore()
const globalStore = useGlobalStore()
const {tasks} = storeToRefs(store)

export default {
  props: {
    taskCheckId: Number,
    created: Boolean,
    login: String,
    taskCheckTitle: String,
    owner: String,
    checkDeveloperTask: String,
    checkDeveloperTimeTask: String,
    checkTimeTask: String,
    checkPriorityTask: Number,
    checkDescriptionTask: String,
    checkDoneTask: Boolean
  },
  data() {
    return {
      tasks: tasks,
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
      checkDescriptionTaskCheck: this.checkDescriptionTask,
      checkDoneTaskCheck: this.checkDoneTask,
      subtaskTitle: ''
    }
  },
  watch: {
    titleTask: function () {
      this.$refs.textarea.style.height = "auto";
      this.$nextTick(() => {
        this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
      })
    },

    descriptionTask: function () {
      this.$refs.textarea.style.height = "auto";
      this.$nextTick(() => {
        this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
      })
    },

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
      this.$refs.textarea.style.height = "auto";
      this.$nextTick(() => {
        this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
      })
    },
    checkDescriptionTaskCheck(newDescription) {
      this.$emit('update:description', newDescription);
    },

    checkDoneTask(newDone) {
      this.checkDoneTaskCheck = newDone;
    },
    checkDoneTaskCheck(newDone) {
      this.$emit('update:done', newDone);
    },

    subtaskTitle: function () {
      store.updateSubtask(this.taskCheckId)
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
        description: this.descriptionTask,
        done: false
      }

      store.addTask(task)

      this.titleTask = ''
      this.developerTask = ''
      this.developerTimeTask = ''
      this.timeTask = ''
      this.priorityTask = 0
      this.descriptionTask = ''
      globalStore.setIsOpenCreate(false);
    },

    addSubtask(id) {
      const timeStamp = Date.now()

      const subtask = {
        id: timeStamp,
        title: "-",
        done: false
      }

      store.addNewSubtask(id, subtask)
    },

    toggleDoneSubtask(taskId, subtaskId, state) {
      store.updateSubtaskDone(taskId, subtaskId, state)
    },

    toggleDoneTask() {
      this.tasks.forEach(v => {
        if (v.id === this.taskCheckId) {
          this.checkDoneTaskCheck = !v.done
          store.toggleTaskDone(v.id, this.checkDoneTaskCheck)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped src="./index.styl"></style>