<script setup lang='ts'>
let props = defineProps<
    {collapse: boolean}
    >()
let emits = defineEmits(['update:collapse'])
let toggle = () => {
  //修改父组件传递的值
  emits('update:collapse', !props.collapse)
}
</script>

<template>
    <el-aside width="auto">
      <el-menu class="el-menu-vertical-demo" :collapse="collapse" >
        <el-menu-item index="1">
          <el-icon-home-filled></el-icon-home-filled>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon-home-filled></el-icon-home-filled>
          <span>导航2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon-home-filled></el-icon-home-filled>
          <span>导航3</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>

<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
}
</style>