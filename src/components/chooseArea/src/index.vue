<script setup lang='ts'>
import {ref,computed,watch} from "vue";
//全部数据
import allAreas from '../lib/pca-code.json'
//省份
let province = ref('')
//城市
let city = ref('')
//区域
let area = ref('')
//省份数据
let areas = ref(allAreas)
//城市数据
let citys = computed(() => {
  //在省份改变后重置城市和区域
  city.value = ''
  area.value = ''
  if (province.value) {
    return allAreas.find(item => item.code === province.value)?.children || []
  } else {
    return []
  }
})
//区域数据
let seleltarea = computed(() => {
//在城市改变后重置区域
  area.value = ''
  if (city.value) {
    return citys.value.find(item => item.code === city.value)?.children || []
  } else {
    return []
  }
})

//分发事件
let emit = defineEmits(['change'])
//定义ts类型
export interface Data {
  name: string,
  code: string
}

//监听区域改变 传递数据给父组件
watch(area, (val) => {
  let provinceDate: Data ={
    name: allAreas.find(item => item.code === province.value)?.name || '',
    code: province.value
  }
  let cityDate: Data ={
    name: citys.value.find(item => item.code === city.value)?.name || '',
    code: city.value
  }
  let areaDate: Data ={
    name: seleltarea.value.find(item => item.code === area.value)?.name || '',
    code: area.value
  }
  console.log(provinceDate,cityDate,areaDate)
  emit('change',provinceDate,cityDate,areaDate)
})
</script>

<template>

  <div>
    <el-select placeholder="请选择省份" v-model="province" clearable>
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select placeholder="请选择城市" v-model="city" style="margin:0 10px;" :disabled="!province" clearable>
      <el-option v-for="item in citys" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area" :disabled="!province || !city" clearable>
      <el-option v-for="item in seleltarea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>


  </div>

</template>

<style scoped lang='scss'>

</style>