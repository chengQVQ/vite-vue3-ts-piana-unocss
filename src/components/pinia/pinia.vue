<template>
  <div>{{cheng}}</div>
  <div>
    <div>{{store.number}}</div>
    <div>getters:{{store.addUnit}}</div>
    <a-button mr-8px type="primary" @click="add">+1</a-button>
    <a-button mr-8px @click="addByAction">action+1</a-button>
    <a-button type="primary" @click="reset">重置store</a-button>
  </div>
</template>

<script>
import { useStore } from "@/store/index";
import { storeToRefs } from "pinia"; //需要使用改函数才能响应式解构
export default defineComponent({
  setup() {
    const store = useStore();
    // const {cheng} = store  //!!不能直接结构 会破坏响应式
    const { cheng } = storeToRefs(store);
    //store.$patch 可以修改多个值
    store.$patch({
      cheng: store.cheng + "world", //修改
      number: 114514,
    });

    const add = () => {
      store.number++;
    };
    const reset = () => {
      store.$reset(); //重置状态
    };

    // 调用store的action的函数
    const addByAction = () => {
      store.actionAdd();
    };
    return {
      store,
      cheng,
      add,
      reset,
      addByAction,
    };
  },
});
</script>

<style>
</style>