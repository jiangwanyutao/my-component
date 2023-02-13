<script setup lang='ts'>
import {onMounted, useSlots,computed} from "vue";
//判断是否传递插槽内容
const slots = useSlots()
import {toLine} from '../../../utils'
let props = defineProps({
  //标记当前趋势是上升还是下降
  type: {
    type: String,
    default: 'up'
  },
  //标记当前趋势显示的文字
  //1.父组件传递的数据
  //2.插槽
  text: {
    type: String,
    default: '上升'
  },
  //上升趋势颜色
  upColor: {
    type: String,
    default: '#f56c6c'
  },
  //下降趋势颜色
  downColor: {
    type: String,
    default: '#67c23a'
  },
  // 颜色反转只在默认颜色下生效,如果传递了颜色,则不会反转
  reverseColor: {
    type: Boolean,
    default: false
  },
  //上升文字颜色
  upTextColor: {
    type: String,
    default: '#f56c6c'
  },
  //下降文字颜色
  downTextColor: {
    type: String,
    default: '#67c23a'
  },
  //上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  // //下降趋势显示的图标
  downIcon: {
    type: String,
    default: 'ArrowDown'
  }

})
//判断当前传递的颜色是上升还是下降
let textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})

</script>

<template>

  <div class="trend">
     <div class="text" :style="{color:textColor}">
      <!-- 如果不存在匿名插槽-->
       <slot v-if="slots.default"></slot>
       <div v-else> {{text}}</div>
     </div>
    <div class="icon">
<!--      <el-icon-arrow-up v-if="type === 'up'" :style="{color: !reverseColor ? upColor : '#52c41a'}"></el-icon-arrow-up>-->
<!--      <el-icon-arrow-down v-else :style="{color:!reverseColor ? downColor : '#fba123'}"></el-icon-arrow-down>-->
      <component :is='`el-icon${toLine(upIcon)}`' v-if="type === 'up'" :style="{color: !reverseColor ? upColor : '#52c41a'}"></component>
      <component :is='`el-icon${toLine(downIcon)}`' v-else :style="{color:!reverseColor ? downColor : '#fba123'}"></component>

    </div>
  </div>

</template>

<style scoped lang='scss'>
.trend{
  display: flex;
  align-items: center;
  .text{
    font-size: 12px;
    margin-right: 5px;
  }
  .icon{
    svg{
      width: 1em;
      height: 1em;
    }
  }
}

</style>