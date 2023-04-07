
// 根据菜单获取面包屑数据
export function getBreadcrumbMenu(menus: App.menuOption[], activeName: string) {
  const breadcrumbMenu: App.menuOption[] = []
  menus.some(item => {
    const flag = activeName.includes(item.name)
    if(flag) {
      breadcrumbMenu.push(...getBreadcrumbMenuItem(item, activeName))
    }
    return flag
  })
  return breadcrumbMenu
}

function getBreadcrumbMenuItem(menu: App.menuOption, activeName: string) {
  const breadcrumbMenu: App.menuOption[] = [];
  if(activeName === menu.name) {
    breadcrumbMenu.push(menu)
  }
  if(activeName.includes(menu.name) && menu.children && menu.children.length){
    breadcrumbMenu.push(menu)
    breadcrumbMenu.push(
      ...menu.children.map(item => getBreadcrumbMenuItem(item as App.menuOption, activeName)).flat(1)
    )
  }
  return breadcrumbMenu
}