import { Breadcrumb } from 'antd';
import { matchRoutes, useLocation, Link } from 'react-router-dom';
import { routers, } from '../../routers';
export default function Index() {
  let location = useLocation()
  let matchs = matchRoutes(routers, location)
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((item, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {
            // @ts-ignore
            matchs![matchs!.length - 1].route.title
          }
        </Link>
      </Breadcrumb.Item>
    );
  });

  const BreadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/home">Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {BreadcrumbItems}
      </Breadcrumb>
    </div>
  )
}
