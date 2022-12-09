import { Layout as AntdLayout } from 'antd';

import classes from './style.module.scss';

const Layout = () => {
  const { Header, Footer, Content } = AntdLayout;

  console.log('classes', classes);

  return (
    <AntdLayout>
      <Header className={classes.header}>
        <div className={classes.wrapper}>Bank application 💲💲💲</div>
      </Header>
      <Content className={classes.wrapper}>Content</Content>
      <Footer className={classes.footer}>
        <div className={classes.wrapper}>All rights reserved 😎</div>
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
