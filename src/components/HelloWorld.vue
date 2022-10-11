<template>
  <div>我是helloworld组件</div>
  <a-table :data-source="data" :columns="[{title: 'value',
    dataIndex: 'value'}]"></a-table>
</template>

<script>
export default {
  setup() {
    return{
      data:ref()
    }
  }
};
</script>

<style>
</style>