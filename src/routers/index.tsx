import { lazy, ReactNode, Suspense } from 'react'
// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
import AppLayout from '../layout';

// 用懒加载实现优化
// const AppLayout = lazy(() => import('../AppLayout'));
const Detail = lazy(() => import('../views/Detail'));
const Home = lazy(() => import('../views/Dashboard'));
const Login = lazy(() => import('../views/Login'));
const NotFound = lazy(() => import('../views/NotFound'))
const MouseCatch = lazy(() => import('../views/MouseCatch'))
const MyTransition = lazy(() => import('../views/Transition'))
const Table = lazy(() => import('../views/Tables'));
const Generator = lazy(() => import('../views/JavaScript/generator'));
// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>
    {children}
  </Suspense>
}

export const routers = [
  {
    path: '/',
    element: <AppLayout />,
    //路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        path: '/home',
        title: '首页',
        key: 'home',
        element: lazyLoad(<Home />)
      },
      {
        title: '表格',
        key: 'table',
        children: [
          {
            index: true,
            path: '/simpleTable',
            title: '简单表格',
            key: 'simpleTable',
            element: lazyLoad(<Table />),

          },
          {
            index: true,
            path: '/simpleTable1',
            title: 'SimpleTable1',
            key: 'simpleTable1',
            element: lazyLoad(<Detail />),

          },
        ]
      },
      {
        path: '/mouse',
        title: '猫捉老鼠',
        key: 'mouse',
        element: lazyLoad(<MouseCatch />)
      },
      {
        path: '/tansition',
        title: '过度动画',
        key: 'tansition',
        element: lazyLoad(<MyTransition />)
      },
      {
        title: 'JavaScript',
        key: 'JavaScript',
        children: [
          {
            index: true,
            path: '/generator',
            title: 'Generator',
            key: 'Generator',
            element: lazyLoad(<Generator />),

          },
        ]
      }
    ]
  },
  {
    path: '/login',
    element: lazyLoad(<Login />)
  }, {
    path: '*',
    element: lazyLoad(<NotFound />)
  }

]