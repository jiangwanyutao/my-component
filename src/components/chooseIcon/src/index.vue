<script setup lang='ts'>
 import {watch,ref} from "vue";
 import * as ELIcon from '@element-plus/icons-vue'
 import {toLine} from '../../../utils/index'
 import {useCopy} from "../../../hooks/useCopy";
 let props = defineProps<{
   //弹出窗标题
  title: string,
   //弹出窗
   visible: boolean,
}>()

 const handclick = () => {
  console.log('handclick')
   //点击按钮，弹出窗显示
  visible.value = true
}
 //因为props是只读的，所以需要用ref包裹一下
 //这样就可以在watch中修改visible的值
 const visible = ref(false)
 watch(() => props.visible, (val) => {
   visible.value = val
})

 //点击图标，复制
  const clickItem = (item: string) => {
    let icon = `<el-icon${toLine(item)}/>`
    useCopy(icon)
    //点击图标后，弹出窗隐藏
    visible.value = false
  }
</script>

<template>

  <div>
  <el-button @click="handclick" type="primary">
    {{title}}
    <slot></slot>
  </el-button>
<!--弹出窗-->
    <div class="m-choose-icon-dialog-body-height">
      <el-dialog :title="title" v-model="visible">
        <div class="container">
          <div v-for="(item,index) in Object.keys(ELIcon)" :key="index" class="item" @click="clickItem(item)">
            <component :is="`el-icon${toLine(item)}`"></component>
            <div class="text">{{item}}</div>
          </div>
        </div>
      </el-dialog>
    </div>

  </div>

</template>

<style scoped lang='scss'>
.container{
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .item{
    width:20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
  svg{
    width:2em;
    height:2em;
  }
  .text{
    font-size: 14px;
  }
  .el-dialog__body{

  }
}
</style>