export interface MenuItem {
    // 菜单项的图标
    icon?: string;
    //处理后的图标
    i?: any;
    // 菜单项的名称
    name: string;
    // 菜单项的标识
    index?: string;
    // 菜单项的子菜单
    children?: MenuItem[];
}