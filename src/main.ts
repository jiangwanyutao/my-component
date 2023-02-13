import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {toLine} from './utils'
//引入封装组件
import mUI from './components/index'
//引入icon图标
import * as Icons from '@element-plus/icons-vue'
import App from './App.vue'
const app = createApp(App)

//注册icon图标
//el-icon-xxx
for (let i in Icons) {
  app.component(`el-icon${toLine(i)}`, (Icons as any) [i])
  // console.log(`el-icon${toLine(i)}`, (Icons as any) [i])
}


app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
