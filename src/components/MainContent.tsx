import React from 'react'
import { Col, Layout,  Row, Space } from 'antd';
import SearchMentions from './SearchMentions';
import Filters from './Filters';
import DropdownContainer from './DropdownContainer';
import Candidates from './Candidates';

const { Content } = Layout;
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
  
 
function MainContent() {
  return (
    <Layout>
      
           
    <Content
      style={{
        margin: '0 24px',
        padding: 24,
        minHeight: 280,
      }}
    >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={'space-between'}>
            <Col span={8} style={{ minHeight:'600px'}}>
            <Space direction='vertical'>
                 <p style={{color:'#1D4ED8', fontSize:'20', fontWeight:'600'}}>London Internship Program < br /> <span style={{color:'#0B0B0B', fontSize:'12', fontWeight:'300'}}>
                 London
                  </span> </p>
            </Space>
            <SearchMentions />
            <Filters />
            </Col>
            <Col span={15} style={{ minHeight:'600px'}}>
            <DropdownContainer/>
            <Candidates/>
            </Col>
        </Row>
    </Content>
  </Layout>
  )
}

export default MainContent