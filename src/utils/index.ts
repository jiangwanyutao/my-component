//驼峰命名转换为中划线命名
export const toLine = (value: string) => {
  return value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
}