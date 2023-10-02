import { Col, Layout,  Row, Space } from 'antd';
import SearchMentions from './SearchMentions';
import Filters from './Filters';
import DropdownContainer from './DropdownContainer';
import Candidates from './Candidates';

const { Content } = Layout;
 
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
        <Row justify={'space-between'}>
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