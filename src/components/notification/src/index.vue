<script setup lang='ts'>
import {toLine} from "../../../utils";

let props = defineProps({
  //显示的图标
  icon: {
    type: String,
    default: 'bell'
  },
  //通知的数量
  value: {
    type: [Number, String],
    default: ''
  },
  //通知的最大值
  max: {
    type: Number,
  },
  //是否显示小圆点
  dot: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <el-popover
      placement="bottom"
      :width="300"
      trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge style="cursor: pointer" :value="value" :max="max" :is-dot="dot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>

</template>

<style scoped lang='scss'>

</style>