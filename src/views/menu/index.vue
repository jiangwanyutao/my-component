<script setup lang='ts'>
let data1 = [
  {
    name: '首页',
    index: '1',
    icon: 'document',
  },
  {
    name: '首页',
    index: '2',
    icon: 'document',
  },
  {
    name: '首页',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '首页',
        index: '3-1',
        icon: 'document',
      },
      {
        name: '首页',
        index: '3-2',
        icon: 'document',
      },
      {
        name: '首页',
        index: '3-3',
        icon: 'document',
      },
    ]
  },
]

let data2 = [
  {
    name: '首页',
    index: '1',
    icon: 'document',
  },
  {
    name: '首页',
    index: '2',
    icon: 'document',
  },
  {
    name: '首页',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '首页1',
        index: '3-1',
        icon: 'document',
        children: [
          {
            name: '首页2',
            index: '3-1-1',
            icon: 'document',
            children: [
              {
                name: '首页3',
                index: '3-1-1-1',
                icon: 'document',
                children: [
                  {
                    name: '首页4',
                    index: '3-1-1-1-1',
                    icon: 'document',
                    children: [
                      {
                        name: '首页5',
                        index: '3-1-1-1-1-1',
                        icon: 'document',
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
]
</script>

<template>
  <div style="width: 200px">
    <m-menu :data="data1" defaulAactive="1"></m-menu>
    <m-infinite-menu :data="data2" background-color="red"></m-infinite-menu>
  </div>

</template>

<style scoped lang='scss'>

</style>