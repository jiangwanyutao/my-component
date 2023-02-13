<script setup lang='ts'>
//导入定义好的props
import {PropType} from "vue";
import {ActionOptions, ListOptions,ListItem} from "./types";
import {toLine} from "../../../utils";
let props = defineProps({
  //列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
   required: true
  },
  //操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  },
})
let emit = defineEmits(['clickItem', 'clickActions'])
//点击item
let clickItem = (item: ListItem, index: number) => {
  console.log(item, index)
  emit('clickItem', item, index)
}
//点击操作
let clickActions = (item: ActionOptions, index: number) => {
  console.log(item, index)
  emit('clickActions', item, index)
}
</script>

<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item,index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div class="container" v-for="(items,index) in item.content" :key="index" @click="clickItem(items,index)">
            <div class="avatar" v-if="items.avatar">
              <el-avatar :size="50" :src="items.avatar"/>
            </div>
            <div class="content">
              <div v-if="items.title" class="title">
                <div>{{items.title}}</div>
                <el-tag v-if="items.tag" size="small" :type="items.tagType">{{items.tag}}</el-tag>
              </div>
              <div class="time" v-if="items.description">{{items.description}}</div>
              <div class="time" v-if="items.time">{{items.time}}</div>
            </div>
          </div>
          <div class="actions">
            <div v-for="(item,index) in actions" :key="index" :class="{'border': index !==actions.length}" class="a-item" @click="clickActions(item,index)">
              <div class="a-icon" v-if="item.icon">
                <component :is="`el-icon-${toLine(item.icon)}`"></component>
              </div>
              <div class="a-text" v-if="item.text">
                {{item.text}}
              </div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<style scoped lang='scss'>
.container{
  display: flex;
  align-content: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover{
    background: #e6f6ff;
  }
  .avatar{
    flex: 1;
  }
  .content{
    flex: 3;
    .time{
      color: #999;
      font-size: 12px;
      margin-top: 5px;
    }
    .title{
      display: flex;
      justify-content: space-between;
      .el-tag{
        margin-left: 10px;
      }
    }
  }
}
.actions{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  cursor: pointer;

  .a-item{
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .a-icon{
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}
.border{
  border-right: 1px solid #eee;
}
</style>