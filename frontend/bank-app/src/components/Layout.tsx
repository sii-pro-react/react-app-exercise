import { Layout as AntdLayout } from 'antd';

const Layout = () => {
  const { Header, Footer, Content } = AntdLayout;

  return (
    <AntdLayout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </AntdLayout>
  );
};

export default Layout;
