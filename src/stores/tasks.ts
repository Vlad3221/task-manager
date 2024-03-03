import {defineStore} from 'pinia'

const STORE_NAME = 'tasks'

export const useTaskStore = defineStore(STORE_NAME, {
    state: () => ({
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
        ] as any[]
    }),
    actions: {
        addTask(task: any) {
            this.tasks.push(task);
            this.persistToLocalStorage();
        },
        updateTask(itemId: number, sectionId: number) {
            this.tasks.forEach(v => {
                if (v.id == itemId) {
                    v.sectionId = sectionId
                    this.persistToLocalStorage()
                }
            })
        },
        removeTask(index: number) {
            const ind = this.tasks.findIndex(val => val.id === index);
            this.tasks.splice(ind, 1);
            this.persistToLocalStorage();
        },
        persistToLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    persist: true
})