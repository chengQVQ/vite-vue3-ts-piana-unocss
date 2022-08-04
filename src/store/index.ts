import { defineStore } from "pinia";
// pinia只有state, getter和action
export const useStore = defineStore("main", {
  state() {
    return { cheng: "hello", number: 0 };
  },
  actions: {
    actionAdd() {
      this.number++;
    },
  },
  // 类似于computed
  getters: {
    addUnit(state) {
      return state.number + "个";
      // return this.number + "个";//可以用state. 也可以直接this
    },
  },
});
