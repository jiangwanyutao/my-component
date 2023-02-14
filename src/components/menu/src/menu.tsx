import {defineComponent, PropType, useAttrs} from "vue";
import {MenuItem} from "./type";
import {toLine} from "../../../utils";

export default defineComponent({
    props: {
        //导航菜单的数据
        data: {
            type: Array as PropType<MenuItem[]>,
            required: true
        },
        //导航菜单默认激活的菜单项的 index
        defaulAactive: {
            type: String,
            default: ''
        },
        //是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。
        router: {
            type: Boolean,
            default: false
        },
    },
    setup(props, ctx) {
        console.log(props.data)
        let attrs = useAttrs()
        //封装一个无限渲染菜单的方法
        //函数返回值是一个数组，数组里面是菜单的jsx
        const renderMenu = (data: MenuItem[]) => {
            return data.map((item: MenuItem) => {
                //每个菜单的图标
                item.i = `el-icon-${toLine(item.icon!)}`
                //处理每个菜单的插槽
                let slots = {
                    title: () => {
                        return <>
                            <item.i/>
                            <span>{item.name}</span>
                        </>
                    }
                }
                //如果有子菜单，就递归调用
                if (item.children && item.children.length) {
                    return (
                        <el-sub-menu v-slots={slots} index={item.index}>
                            {renderMenu(item.children)}
                        </el-sub-menu>
                    )
                }
                //如果没有子菜单，就直接返回
                return (
                    <el-menu-item index={item.index}>
                        <item.i/>
                        <span>{item.name}</span>
                    </el-menu-item>
                )
            })
        }
        return () => {
            return (
                <el-menu default-active={props.defaulAactive} router={props.router} {...attrs}>
                    {renderMenu(props.data)}
                </el-menu>
            )
        }
    }
})