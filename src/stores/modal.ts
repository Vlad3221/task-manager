import {defineStore} from 'pinia';

export const useGlobalStore = defineStore('modal', {
    state: () => ({
        isOpenCreate: false,
        isOpenCheck: false
    }),
    actions: {
        setIsOpenCreate(value: boolean) {
            this.isOpenCreate = value;
        },

        setIsOpenCheck(value: boolean) {
            this.isOpenCheck = value;
        }
    },
    getters: {
        getIsModalCreateOpen: (state) => state.isOpenCreate,
        getIsModalCheckOpen: (state) => state.isOpenCheck
    }
});