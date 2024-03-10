import {defineStore} from 'pinia'

const STORE_NAME = 'tasks'

export const useTaskStore = defineStore(STORE_NAME, {
    state: () => ({
        tasks: [
            {
                sectionId: 6,
                id: 1,
                title: "Добавить чекбокс закрытия задач",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "1 ч.",
                timeEnd: "09.03.2024",
                prior: 4,
                description: "Нужно добавить контролирующий элемент на сокращённую версию показа задач. Чекбокс с сохранением в локальной истории.\n" +
                    "Так же, если он активен, нужно сделать стилизацию мини таска. ",
                done: true,
                subtasks: []
            },
            {
                sectionId: 4,
                id: 2,
                title: "Рестилизация и добавление нового функционала настройки задач",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "4 ч.",
                timeEnd: "10.03.2024",
                prior: 10,
                description: "Требуется полностью переработать стили и компоненты настройки задач",
                done: false,
                subtasks: [
                    {
                        id: 1,
                        title: "Доработка функционала подзадач"
                    }
                ]
            }
        ] as any[]
    }),
    actions: {
        addTask(task: any) {
            this.tasks.push(task);
            this.persistToLocalStorage();
        },

        updateTaskSection(itemId: number, sectionId: number) {
            this.tasks.forEach(v => {
                if (v.id == itemId) {
                    v.sectionId = sectionId
                    this.persistToLocalStorage()
                }
            })
        },

        updateTaskInformation(itemId: number, title: string, developer: string, timeDevelop: string, timeEnd: string, prior: number, description: string) {
            this.tasks.forEach(v => {
                if (v.id == itemId) {
                    v.title = title
                    v.developer = developer
                    v.timeDevelop = timeDevelop
                    v.timeEnd = timeEnd
                    v.prior = prior
                    v.description = description
                    this.persistToLocalStorage()
                }
            })
        },

        addNewSubtask(itemId: number, subItem: any) {
            this.tasks.forEach(v => {
                if (v.id == itemId) {
                    const subtask = v.subtasks
                    subtask.push(subItem);
                    this.persistToLocalStorage()
                }
            })
        },

        updateSubtask(itemId: number, itemIdSubtask: number, title: string) {
            this.tasks.forEach(v => {
                if (v.id == itemId) {
                    const subtask = v.subtasks
                    subtask.forEach(s => {
                        if (s.id == itemIdSubtask) {
                            s.title = title
                            this.persistToLocalStorage()
                        }
                    })
                }
            })
        },

        removeTask(index: number) {
            const ind = this.tasks.findIndex(val => val.id === index);
            this.tasks.splice(ind, 1);
            this.persistToLocalStorage();
        },

        toggleTaskDone(itemId: number, done: boolean) {
            this.tasks.forEach(v => {
                if (v.id == itemId) {
                    v.done = done
                    this.persistToLocalStorage()
                }
            })
        },

        persistToLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    persist: true
})