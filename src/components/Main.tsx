import React, { useState } from 'react'
import { Layout, Menu, Space, Avatar } from 'antd'
import {
    CarryOutOutlined,
    FileTextOutlined,
    HeartOutlined,
    HomeOutlined,
    ProfileOutlined,
    ShareAltOutlined,
    TeamOutlined,
  } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import MainContent from './MainContent';
function Main() {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{minHeight:'100vh',  boxShadow: '2px 2px 2px 1px #f5f5f5'}} theme='light'>
          <Space direction="vertical" align='center' size={30}>
          <Avatar/>
           <Menu
          theme="light"
          mode="vertical"
          style={{border:'none', }}
          defaultSelectedKeys={['']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <TeamOutlined />,
              label: 'Team',
            },
            {
              key: '3',
              icon: <CarryOutOutlined />,
              label: '',
            },
            {
              key: '4',
              icon: <ShareAltOutlined />,
              label: 'Share',
            },
            {
              key: '5',
              icon: <FileTextOutlined />,
              label: 'User',
            },
            {
              key: '6',
              icon: <ProfileOutlined />,
              label: 'Profile',
            },
            {
              key: '7',
              icon: <HeartOutlined/>,
              label: 'Like',
            },
          ]}
        />
      </Space>
        </Sider>
        <MainContent />
    </Layout>
  )
}

export default Main