<template>
  <a-tabs tab-position="left">
    <a-tab-pane tab="杂" key="1">
      <test />
    </a-tab-pane>
    <a-tab-pane tab="pinia" key="2"><pinia/></a-tab-pane>
    <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>

<script>
export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>

<style>
</style>