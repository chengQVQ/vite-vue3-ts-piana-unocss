<template>
  <a-button type="primary" @click="add">hahaha</a-button>
  <hello-world />
  <img src="@/assets/1.jpg" class="w-10px" alt="">

  <div mt-13px class="h-[calc(100px-10px)]">123</div>
  <div mt-13px flex-c>456</div>
  <div>{{n}}</div>
</template>

<script>
export default defineComponent({
  setup() {
    const obj = reactive({
      a: 1,
      b: 2,
    });
    const n = computed(() => {
      return obj.a + obj.b;
    });
    const add = () => {
      obj.a += 2;
    };
    return {
      n,
      add,
    };
  },
});
</script>

<style>
</style>