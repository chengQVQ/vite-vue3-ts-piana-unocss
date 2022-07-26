<template>
  <a-button type="primary">hahaha</a-button>
  <hello-world />
  <img src="@/assets/1.jpg" class="w-10px" alt="">

  <div mt-13px class="h-[calc(100px-10px)]">123</div>
  <div mt-13px flex-c>456</div>
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