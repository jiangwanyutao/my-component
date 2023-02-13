<script setup lang="ts">
//导入头部组件
import NavHeader from '../navHeader/index.vue'
//导入侧边栏组件
import NavSide from '../navSide/index.vue'
import {ref} from 'vue'
let collapse = ref(false)

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
       <nav-Side v-model:collapse="collapse"></nav-Side>
      </el-aside>
      <el-container>
<!--        Header-->
        <el-header>
          <nav-Header v-model:collapse="collapse"></nav-Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-header{
  padding: 0px;
  border: 1px solid #eee;
  border-left: 0px;
}
</style>
