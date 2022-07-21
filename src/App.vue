<template>
  <a-button type="link">hahaha</a-button>
  <hello-world />
</template>

<script>
import { useStore } from "./store/index";
export default defineComponent({
  setup() {
    const store = useStore();
    store.$patch({
      cheng: store.cheng + "world", //修改
    });
    return {
      store,
    };
  },
});
</script>

<style>
</style>