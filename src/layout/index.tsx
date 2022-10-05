import { Layout, } from 'antd';
import { Outlet } from 'react-router-dom';
import './index.scss'
import MyBreadcumb from './Breadcrumb'
import MyMenu from './Menu'
import MyHeader from './Header'
const { Header, Content, Sider } = Layout;

export default function AppLayout() {

  return (
    <>
      <Layout className='OutterWrapper' style={{ height: '100vh' }}>
        <Header className="header">
          <MyHeader></MyHeader>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <MyMenu></MyMenu>
          </Sider>
          <Layout style={{ padding: '0 24px 10px' }}>
            <MyBreadcumb></MyBreadcumb>

            <Content
              style={{
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}