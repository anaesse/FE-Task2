import React from 'react'
import { Col, Layout,  Row,  Space,  theme, Dropdown, Button } from 'antd';
// import { Typography } from 'antd';
import { DownOutlined, TagOutlined, UserAddOutlined, UserDeleteOutlined, UserSwitchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
// import { type } from 'os';

const { Header,Content } = Layout;
// const { Title, Text } = Typography;

// const items: MenuProps['items'] = [
//     {
//       label: `${
//         <Space>
//             <p>Applied</p>
//             <button>1745</button>
//         </Space>
//         }`,
//       key: '0',
//     },
//     {
//         type:'divider'
//     },
//     {
//       label: `${
//         <Space>
//             <p>Shortlisted</p>
//             <button>453</button>
//         </Space>
//         }`,
//       key: '1',
//     },
    
//     {
//       type: 'divider',
//     },
//     {
//         label: `${
//           <Space>
//               <p>Technical Interview</p>
//               <button>123</button>
//           </Space>
//           }`,
//         key: '2',
//       },
//     {
//       type: 'divider',
//     },
//     {
//         label: `${
//           <Space>
//               <p>Opportunity Browsing</p>
//               <button>243</button>
//           </Space>
//           }`,
//         key: '3',
//       },
//     {
//       type: 'divider',
//     },
//     {
//         label: `${
//           <Space>
//               <p>Video Interview I</p>
//               <button>25</button>
//           </Space>
//           }`,
//         key: '4',
//       },
//     {
//       type: 'divider',
//     },
//     {
//         label: `${
//           <Space>
//               <p>Video Interview II</p>
//               <button>25</button>
//           </Space>
//           }`,
//         key: '5',
//       },
//     {
//       type: 'divider',
//     },
//     {
//         label: `${
//           <Space>
//               <p>Video Interview III</p>
//               <button>25</button>
//           </Space>
//           }`,
//         key: '6',
//       },
//     {
//       type: 'divider',
//     },
//     {
//         label: `${
//           <Space>
//               <p>Offer</p>
//               <button>25</button>
//           </Space>
//           }`,
//         key: '7',
//       },
//     {
//       type: 'divider',
//     },
//     {
//         label: `${
//           <Space>
//               <p>Withdrawn</p>
//               <button>25</button>
//           </Space>
//           }`,
//         key: '8',
//       },
//   ];
  

// const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     message.info('Click on left button.');
//     console.log('click left button', e);
//   };
  
//   const handleMenuClick: MenuProps['onClick'] = (e) => {
//     message.info('Click on menu item.');
//     console.log('click', e);
//   };
  
  const items: MenuProps['items'] = [
  ];
  
  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };
function MainContent() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

  return (
    <Layout>
    <Header style={{ padding: '20px 0', backgroundColor:'#F5F5F5', margin:'30px 0  0 24px' }}>
        <Space align='center' size={280}>
            <div>
                 <p style={{color:'#1D4ED8'}}>London Internship Program</p>
                 <p style={{color:'#0B0B0B'}}>London</p>
            </div>
            <Dropdown menu={{ items }} trigger={['click']}>
                    <Space onClick={(e) => e.preventDefault()}> Click me <DownOutlined />
                    </Space>
                    </Dropdown>
                    <Space>
                        <Button icon={<TagOutlined />} />
                        <Button icon={<UserDeleteOutlined/>} />
                        <Button icon={<UserAddOutlined />} />
                        <Button icon={<UserSwitchOutlined />} />
                        <Dropdown.Button menu={menuProps} placement="bottom" icon={<DownOutlined />} > Dropdown </Dropdown.Button>
     
                    </Space>
        </Space>
    </Header>
    <Content
      style={{
        margin: '80px 24px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
      Content
    </Content>
  </Layout>
  )
}

export default MainContent