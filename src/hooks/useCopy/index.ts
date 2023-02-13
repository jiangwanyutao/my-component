import {ElMessage} from "element-plus";
//赋值文本
export const useCopy = (text: string) => {
        //创建一个input标签
        const input = document.createElement('input')
        //设置input标签的value值
        input.value = text
        //将input标签添加到body中
        document.body.appendChild(input)
        //选中input标签中的文本
        input.select()
        //复制选中的文本
        document.execCommand('copy')
        //删除input标签
        document.body.removeChild(input)
        //提示复制成功
        ElMessage.success('复制成功')
}