import { Button, Card, Divider } from 'antd'

import { Avatar, List, Space } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import CandidateHeader from './CandidateHeader';
import { PlayCircleTwoTone } from '@ant-design/icons';


const data = (([
  {
    name:'Aaliyah Sanderson',
    avatar: <Avatar size={58} style={{backgroundColor:'#EDF4FF', fontSize:'20px', color:'#D0E1FF'}}>AS</Avatar>,
    address:
      'Riyadh, Saudi Arabia',
    school:
      'Bachelor - Cambridge University (2023 - 2023)',
      rate:['#top_candidate', '#top_candidate'],
      tags:['New york', 'Marketing', 'London']},
  {
    name:'John Doe',
    avatar: <Avatar size={58} style={{backgroundColor:'#EDF4FF', fontSize:'20px', color:'#D0E1FF'}}>AS</Avatar>,
    address:
      'Bostom, USA',
    school:
      'Bachelor - MIT(2023 - 2023)',
      rate:['#top_candidate', '#top_candidate'],
      tags:['New york', 'Marketing', 'London']
    },
  {
    name:'Thomas Matt',
    avatar: <Avatar size={58} style={{backgroundColor:'#EDF4FF', fontSize:'20px', color:'#D0E1FF'}}>AS</Avatar>,
    address:
      'Edinburgh, UK',
    school:
      'Bachelor - Harvard University(2023 - 2023)',
      rate:['#top_candidate', '#top_candidate'],
      tags:['New york', 'Marketing', 'London']
    },
  {
    name:'Kamilia Smith',
    avatar: <Avatar size={58} style={{backgroundColor:'#EDF4FF', fontSize:'20px', color:'#D0E1FF'}}>AS</Avatar>,
    address:
      'London, UK',
    school:
      'Bachelor - Boston University(2023 - 2023)',
      rate:['#top_candidate', '#top_candidate'],
      tags:['New york', 'Marketing', 'London']
    },
  {
    name:'Roy Jade',
    avatar: <Avatar size={58} style={{backgroundColor:'#EDF4FF', fontSize:'20px', color:'#D0E1FF'}}>AS</Avatar>,
    address:
      'Cambridge, UK',
    school:
      'Bachelor - Yale (2023 - 2023)',
      rate:['#top_candidate', '#top_candidate'],
      tags:['New york', 'Marketing', 'London']
    },
  {
    name:'Ahmed Salman',
    avatar: <Avatar size={58} style={{backgroundColor:'#EDF4FF', fontSize:'20px', color:'#D0E1FF'}}>AS</Avatar>,
    address:
      'New York, USA',
    school:
      'Bachelor - Cambridge University (2023 - 2023)',
      rate:['#top_candidate', '#top_candidate'],
      tags:['New york', 'Marketing', 'London']
    }
    ]));

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

function Candidates() {
  return (
<Card style={{margin:'1.8rem 0'}} >
  <CandidateHeader/>
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
    footer={
      <Space style={{display:'flex', justifyContent:'end'}}>
        <Button icon={<PlayCircleTwoTone />} shape='round' style={{background:'#F7F8FD', color:'#22215B', display:'flex', alignItems:'center'}}> 4 </Button>
        <Button icon={<PlayCircleTwoTone /> } shape='round' style={{background:'#E3EBFF', color:'#1D4ED8', border:'none', display:'flex', alignItems:'center'}}> 5 Programs </Button>
        
      </Space>
    }
    renderItem={(item) => (
    <List.Item
      >
          <Space size={24}>
          <Checkbox onChange={onChange}/>
          {item.avatar}
          <Space direction='vertical' size={0}>
            <h2 style={{color:'#000', fontSize:'14px', margin:'0'}}>{item.name }</h2>
            <p style={{color:'#000', fontSize:'10px', fontWeight:'500', margin:'0'}}>{item.address}</p>
            <p style={{color:'#000', fontSize:'10px', fontWeight:'300', margin:'0'}}>{item.school}</p>
          <Space size={10}>
            <p style={{color:'#1D4ED8', fontSize:'8px',margin:'0'}} >{item.rate[0]}</p>
            <p style={{color:'#1D4ED8', fontSize:'8px',margin:'0'}} >{item.rate[1]}</p>
            </Space>
          <Space size={10}>
            <Button className='tagButton' shape='round'>{item.tags[0]}</Button>
            <Button className='tagButton' shape='round'>{item.tags[1]}</Button>
            <Button className='tagButton' shape='round'>{item.tags[1]}</Button>
            </Space>
          </Space>
          </Space>
      </List.Item>
    )}
    />
    </Card>
  )
}

export default Candidates