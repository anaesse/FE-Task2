
import { Card, Divider } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Personal Information', '1', <FileTextOutlined />, [
      getItem('', ''),
    ]),

    { type: 'divider' },
  
    getItem('Education', '2', <FileTextOutlined />, [
      getItem('', ''),
    
    ]),
  
    { type: 'divider' },
  
    getItem('Work Experience', '3', <FileTextOutlined />, [
      getItem('', ''),
      
    ]),
    { type: 'divider' },
  
    getItem('Activity Filter', '4', <FileTextOutlined />, [
      getItem('', ''),
      
    ]),
    { type: 'divider' },
  
    getItem('Advanced Filter', '5', <FileTextOutlined />, [
      getItem('', ''),
      
    ]),
  
  ];

function Filters() {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
      };
  return (
    <div>
        <Card title="Filters" extra={'0 Selected'} style={{ width:'100%', marginTop:'1.5rem' }}>
            <Divider/>
            <Menu
      onClick={onClick}
      style={{ width: 256 }}
      mode="inline"
      items={items}
    />
    </Card>
    </div>
  )
}

export default Filters