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
  <div class="header">
     <span class="header-title" @click="toggle">
            <el-icon-expand style="margin-right: 10px" v-if="collapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
  </span>
  </div>


</template>

<style scoped lang='scss'>
.header{
  height:60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

</style>