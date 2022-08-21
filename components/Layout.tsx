import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
import styles from "../styles/Components/Layout.module.css";

interface IProps {
    children: React.ReactNode;
}

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });



const CustomLayout = ({children} : IProps) => {
    return (
        <Layout style={{height: "100vh", overflowY: 'clip'}}>
            
    {/* <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header> */}
    <Layout>
      <Sider width={200} className={styles.sidepanel__main}>
        <div className={styles.side__panel__title__wrapper}>
            <p className={styles.side__panel__title}>SHISHYA</p>
        </div>
        <div className={styles.custom__style}>
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
                height: '100%',
                borderRight: 0,
            }}
            items={items2}
            />
        </div>
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            // border: '1px solid black',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default CustomLayout;