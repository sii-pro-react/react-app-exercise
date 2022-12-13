import { Layout as AntdLayout } from 'antd';
import Table from '../Table/Table';
import clsx from 'clsx';

import classes from './style.module.scss';

const Layout = () => {
  const { Header, Footer, Content } = AntdLayout;

  return (
    <AntdLayout>
      <Header className={classes.header}>
        <div className={classes.wrapper}>Bank application 💲💲💲</div>
      </Header>
      <Content className={clsx(classes.wrapper, classes.content)}>
        <Table />
      </Content>
      <Footer className={classes.footer}>
        <div className={classes.wrapper}>All rights reserved 😎</div>
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
