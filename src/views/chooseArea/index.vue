<script setup lang='ts'>
import {ref,computed,watch} from "vue";
//接收子组件传递的数据
let changeArea = (province: any,city: any,area: any) => {
  console.log(province,city,area)
}

</script>

<template>
  <m-choose-area @change="changeArea"/>
</template>

<style scoped lang='scss'>

</style>