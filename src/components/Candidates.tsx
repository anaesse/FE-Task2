import { Card, Divider } from 'antd'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, List, Space } from 'antd';


const data = Array.from({ length: 23 }).map((_, i) => ({
    name:'Aaliyah Sanderson',
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    address:
      'Riyadh, Saudi Arabia',
    school:
      'Bachelor - Cambridge University (2023 - 2023)',
      tag:"#top_candidate"
  }));
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

function Candidates() {
  return (
<Card style={{margin:'1.8rem 0'}} >
    <Divider/>
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
    <List.Item
        key={item.name}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        // extra={
        //   <img
        //     width={272}
        //     alt="logo"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //   />
        // }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.name}
          description={item.address}
        />
        {item.school}
        {item.tag}
      </List.Item>
    )}
    />
    </Card>
  )
}

export default Candidates