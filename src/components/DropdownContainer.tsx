import {Space, Dropdown, Button } from 'antd';
import { DownOutlined, MailOutlined, TagOutlined, UserAddOutlined, UserDeleteOutlined, UserSwitchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
];

const menuProps = {
  items,
  // onClick: handleMenuClick,
};


function DropdownContainer() {
  return (
    <Space size={48}>
        <Dropdown menu={{ items }} trigger={['click']}>
            <Button style={{color:'#1D4ED8', font:'14px 600'}}>
                <Space size={50}  onClick={(e) => e.preventDefault()}> Opportunity Browsing <DownOutlined/>
                </Space>
            </Button>
        </Dropdown>
        <Space size={16}>
            <Button style={{color:'#444'}} icon={<TagOutlined />} />
            <Button style={{color:'#A80000'}} icon={<UserDeleteOutlined/>} />
            <Button style={{color:'#0B0B0B'}} icon={<UserAddOutlined />} />
            <Button style={{color:'#0B0B0B'}} icon={<UserSwitchOutlined />} />
            <Button style={{color:'#0B0B0B'}} icon={<MailOutlined />} />
            <Dropdown.Button style={{background:'#1D4ED8', color:'#fff'}} menu={menuProps} placement="bottom" icon={<DownOutlined />} > Dropdown </Dropdown.Button>
     
        </Space>
    </Space>
  )
}

export default DropdownContainer