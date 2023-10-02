import {Space,Button, Dropdown } from 'antd';
import { DownOutlined, MailOutlined, TagOutlined, UserAddOutlined, UserDeleteOutlined, UserSwitchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import OppBrowse from './OppBrowse';
const items: MenuProps['items'] = [
];

const menuProps = {
  items,
  // onClick: handleMenuClick,
};


function DropdownContainer() {
  return (
    <Space size={48} style={{marginTop:'12px'}} >
       <OppBrowse/>
        <Space size={16}>
            <Button style={{color:'#444'}} icon={<TagOutlined />} />
            <Button style={{color:'#A80000'}} icon={<UserDeleteOutlined/>} />
            <Button style={{color:'#0B0B0B'}} icon={<UserAddOutlined />} />
            <Button style={{color:'#0B0B0B'}} icon={<UserSwitchOutlined />} />
            <Button style={{color:'#0B0B0B'}} icon={<MailOutlined />} />
            <Dropdown.Button
            type='primary' menu={menuProps} placement="bottom" icon={<DownOutlined />} > Dropdown </Dropdown.Button>
     
        </Space>
    </Space>
  )
}

export default DropdownContainer