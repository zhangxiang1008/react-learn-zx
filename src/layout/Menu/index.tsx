import React from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd';
import { routers } from '../../routers/index'
import { useNavigate, useLocation } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
export default function Index() {
  let navigate = useNavigate()
  let location = useLocation()
  const onClick: MenuProps['onClick'] = e => {
    navigate(e.key)
  };
  let items: MenuProps['items'] = [];
  // 递归算法获取所有深度的所有路由
  const getChildItems = (route: any) => {
    let childItems: MenuItem[] = []
    if (!route.children) {
      return null;
    }
    route.children.forEach((item: any) => {
      let child: MenuItem[] = getChildItems(item) || []
      childItems.push(child.length > 0 ? getItem(item.title, item.key, null, child) : getItem(item.title, item.key, null))
    })
    return childItems
  }
  items = getChildItems(routers[0]) || []

  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['home']}
        selectedKeys={[location.pathname.slice(1)]}
        mode="inline"
        items={items}
      />
    </div>
  )
}
