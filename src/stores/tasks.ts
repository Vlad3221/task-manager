import {defineStore} from 'pinia'

const STORE_NAME = 'tasks'

export const useTaskStore = defineStore(STORE_NAME, {
    state: () => ({
        tasks: [
            {
                sectionId: 6,
                id: 1,
                title: "Разработка функций для таблиц и задач",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "10 ч.",
                timeEnd: "01.03.2024",
                prior: 10,
                description: "Описание задачи",
                done: true
            },
            {
                sectionId: 6,
                id: 2,
                title: "Функция создания таска",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "2 ч.",
                timeEnd: "01.03.2024",
                prior: 2,
                description: "Описание задачи",
                done: true
            },
            {
                sectionId: 6,
                id: 3,
                title: "Функция удаления таска",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "2 ч.",
                timeEnd: "01.03.2024",
                prior: 2,
                description: "Описание задачи",
                done: true
            },
            {
                sectionId: 6,
                id: 4,
                title: "Функция редактирования таска",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "2 ч.",
                timeEnd: "01.03.2024",
                prior: 2,
                description: "Описание задачи",
                done: true
            },
            {
                sectionId: 6,
                id: 5,
                title: "Разработать привязку таска к таблицам",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "2 ч.",
                timeEnd: "01.03.2024",
                prior: 2,
                description: "Описание задачи",
                done: true
            },
            {
                sectionId: 6,
                id: 6,
                title: "Функция перемещения таска в другие столбцы",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "2 ч.",
                timeEnd: "01.03.2024",
                prior: 7,
                description: "Описание задачи",
                done: true
            },
            {
                sectionId: 6,
                id: 7,
                title: "Проверка на другого исполнителя",
                developer: "Менеджер",
                owner: "Администратор",
                timeDevelop: "2 ч.",
                timeEnd: "01.03.2024",
                prior: 2,
                description: "Описание задачи",
                done: true
            },
            {
                sectionId: 6,
                id: 8,
                title: "Добавить чекбокс закрытия задач",
                developer: "Владислав Шалаев",
                owner: "Администратор",
                timeDevelop: "1 ч.",
                timeEnd: "09.03.2024",
                prior: 4,
                description: "Нужно добавить контролирующий элемент на сокращённую версию показа задач. Чекбокс с сохранением в локальной истории.\n" +
                    "Так же, если он активен, нужно сделать стилизацию мини таска. ",
                done: true
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