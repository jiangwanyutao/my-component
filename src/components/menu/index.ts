import {App} from 'vue'
import menu from './src/index.vue'

//导入tsx
import infiniteMenu from './src/menu'

export default {
    install: (app: App) => {
        app.component('m-menu', menu)
        app.component('m-infinite-menu', infiniteMenu)

    }
}