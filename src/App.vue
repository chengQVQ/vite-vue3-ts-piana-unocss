<template>
  <div mt-30px text-blue>{{store.cheng}}</div>
</template>

<script>
import { useStore } from "./store/index";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const store = useStore();
    store.$patch({
      cheng: store.cheng + "world", //修改
    });
    return{
      store
    }
  },
});
</script>

<style>
</style>