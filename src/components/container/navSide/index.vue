<script setup lang='ts'>
let props = defineProps<
    {collapse: boolean}
    >()
let data = [
  {
    icon:'house',
    name:'首页',
    index:'',
  },
  {
    icon:'check',
    name:'图标选择器',
    index:'/chooseIcon',
  },
  {
    icon:'location',
    name:'省市区选择器',
    index:'/chooseArea',
  },
  {
    icon:'sort',
    name:'趋势标记',
    index:'/trend',
  },
  {
    icon:'timer',
    name:'时间选择器',
    index:'/chooseTime',
  },
  {
    icon:'bell',
    name:'通知菜单',
    index:'/notification',
  },
  {
    icon:'menu',
    name:'导航菜单',
    index:'/menu',
  },
  {
    icon:'tools',
    name:'城市选择',
    index:'/chooseCity',
  },
  {
    icon:'more',
    name:'进度条',
    index:'/progress',
  },
  {
    icon:'calendar',
    name:'日历',
    index:'/calendar',
  },
  {
    icon:'setting',
    name:'表单',
    index:'/form',
  },
  {
    icon:'calendar',
    name:'表格',
    index:'/table',
  },

]

</script>

<template>
<!--    <el-aside width="auto">-->
<!--      <el-menu class="el-menu-vertical-demo" :collapse="collapse" >-->
<!--        <el-menu-item index="1">-->
<!--          <el-icon-home-filled></el-icon-home-filled>-->
<!--          <span>首页</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="2">-->
<!--          <el-icon-home-filled></el-icon-home-filled>-->
<!--          <span>导航2</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="3">-->
<!--          <el-icon-home-filled></el-icon-home-filled>-->
<!--          <span>导航3</span>-->
<!--        </el-menu-item>-->
<!--      </el-menu>-->
<!--    </el-aside>-->
  <m-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></m-menu>
</template>

<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
}
</style>