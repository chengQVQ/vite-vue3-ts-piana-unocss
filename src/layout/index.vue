<template>
  <a-layout>
    <layout-header />
    <a-layout class="session">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu class="overflow-scroll" v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                home
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                login
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import layoutHeader from "./layoutHeader/index.vue";
export default defineComponent({
  components: {
    layoutHeader,
  },
  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>
<style>
.session {
  height: calc(100vh - 64px);
}
.ant-menu-inline {
  overflow-x: hidden;
}
</style>