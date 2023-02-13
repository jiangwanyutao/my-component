<script setup lang='ts'>
import { defineProps, ref } from 'vue'
let visible = ref<boolean>(false)
</script>

<template>
 <m-choose-icon title="选择图标"  :visible="visible"></m-choose-icon>
</template>

<style scoped lang='scss'>

</style>