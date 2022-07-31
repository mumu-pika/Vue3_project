import { defineStore } from 'pinia'

import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
  state: () => ({
    name: 'pika',
    age: 18
  }),

  // computed 可以修饰一些值
  getters: {
      
  },

  // methods 可以做同步和异步的操作，提交state
  actions: {
    setName(name:string) {
      this.name = name
    }
  }

})