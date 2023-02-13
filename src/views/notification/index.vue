<script setup lang='ts'>
import {list, actions} from "./data";
let clickActions = (action: any, item: any) => {
  console.log(action, item)
}
let clickItem = (item: any) => {
  console.log(item)
}
</script>

<template>

 <m-notification :value="10">
   <template #default>
     <m-list :list="list" :actions="actions" @clickActions="clickActions" @clickItem="clickItem"/>
   </template>
 </m-notification>
  <br/>
  <br/>

  <m-notification :value="30" :max="30">
    <template #default>
      <m-list :list="list" :actions="actions" />
    </template>
  </m-notification>
  <br/>
  <br/>

  <m-notification :value="30" :max="30" :dot="true">
    <template #default>
      <m-list :list="list" :actions="actions" />
    </template>
  </m-notification>
  <br/>
  <br/>

  <m-notification :value="50" :max="30" :dot="false" icon="tickets">
    <template #default>
      <m-list :list="list" :actions="actions" />
    </template>
  </m-notification>




</template>

<style scoped lang='scss'>

</style>