import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  
      {
        label: <a href='#'>Applied</a>,
        key: '0',
        
      },
      {
        type:'divider'
      },
      {
        label: <a href='#'>Shortlisted</a> ,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='#'>Technical Interview</a>,
        key: '2',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='#'>Opportunity Browsing</a>,
        key: '3',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='#'>Video Interview I</a>,
        key: '4',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='#'>Video Interview II</a>,
        key: '5',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='#'>Video Interview III</a>,
        key: '6',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='#'>Offer</a> ,
        key: '7',
      },
      {
        type: 'divider',
      },
      {
        label: <a href='#'>Withdrawn</a>,
        key: '',
      },

];

function OppBrowse() {
  return (
    <div>
      <Dropdown className='dropdownButton' menu={{items}}  trigger={['click']} >
      <a onClick={(e) => e.preventDefault()}>
      <Space>
      Opportunity Browsing
        <DownOutlined />
      </Space>
      </a>
  </Dropdown>
    </div>
  )
}

export default OppBrowse