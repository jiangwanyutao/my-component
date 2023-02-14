<script setup lang='ts'>
import {MenuItem} from "./type";
import {PropType} from "vue";
import {toLine} from "../../../utils";

let props = defineProps({
  //导航菜单的数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  //导航菜单默认激活的菜单项的 index
  defaulAactive: {
    type: String,
    default: ''
  },
  //是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。
  router: {
    type: Boolean,
    default: false
  },
})
console.log(props.data)
</script>

<template>

  <el-menu :default-active="defaulAactive" :router="router" v-bind="$attrs">
    <template v-for="item in data" :key="item.index">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.index">
        <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length >0" :index="item.index">
        <template #title>
          <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
          <span slot="title">{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(items,index1) in item.children" :index="items.index" :key="index1">
          <component v-if="items.icon" :is="`el-icon-${toLine(items.icon)}`"></component>
          <span slot="title">{{ items.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>

  </el-menu>

</template>

<style scoped lang='scss'>
svg {
  margin-right: 4px;
}
</style>