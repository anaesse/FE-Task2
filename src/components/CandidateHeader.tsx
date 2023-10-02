import { Badge, Divider, Space } from 'antd'
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

function CandidateHeader() {
  return (
    <Space style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <Space size={30}>
    <Checkbox onChange={onChange}/>
    <p style={{color:'#1D4ED8', fontSize:'14px', fontWeight:'600'}}> <span>247</span> Candidates</p>
    </Space>
    <Space>
        <p style={{color:'#1D4ED8', fontSize:'14px', fontWeight:'600'}} >Qualified <Badge count={""} style={{background:'#F7F8FD', color:'#22215B'}} /></p>
        <Divider type="vertical"/>
        <p>Task <Badge count={25} style={{background:'#F7F8FD', color:'#22215B'}} /></p>
        <Divider type="vertical"/>
        <p>Disqualified <Badge count={78} style={{background:'#F7F8FD', color:'#22215B'}} /></p>
    </Space>
  </Space>
  )
}

export default CandidateHeader