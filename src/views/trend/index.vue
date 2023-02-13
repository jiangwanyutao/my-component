<script setup lang='ts'>

</script>

<template>
  <div class="flex">
    <div>    <m-trend text="可自定义传递文字,图标及颜色" type="up" upIcon="ArrowUp" downIcon="ArrowDown" upColor="red" downColor="blue"></m-trend>
    </div>
<!--    插槽传递 text传递的会失效-->
    <div>    <m-trend text="销售额" type="up">销售额</m-trend>
    </div>
    <div>    <m-trend text="营业额"></m-trend>
    </div>
    <div>    <m-trend text="销售额" type="down"></m-trend>
    </div>
    <div>    <m-trend text="颜色反转" type="down" reverseColor></m-trend>
    </div>
    <div>    <m-trend text="文字颜色" upTextColor="blue"></m-trend>
    </div>

  </div>


</template>

<style scoped lang='scss'>
.flex{
  display:flex;
  font-size: 18px;
  div{
    margin-right: 10px;
  }
}
</style>