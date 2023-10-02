import { Mentions } from 'antd';
import type { MentionsOptionProps } from 'antd/es/mentions';

const onChange = (value: string) => {
  console.log('Change:', value);
};

const onSelect = (option: MentionsOptionProps) => {
  console.log('select', option);
};

function SearchMentions() {
  return (
    <div>
        <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    placeholder='Serach by name, edu, exp or #tag'
    options={
      [
      {
        value: 'Personal Information',
        label: 'Personal Information',
      },
      {
        value: 'Education',
        label: 'Education',
      },
      {
        value: 'Work Experience',
        label: 'Work Experience',
      },
      {
        value: 'Activity Fliter',
        label: 'Activity Fliter',
      },
      {
        value: 'Advance Fliter',
        label: 'Advance Filter',
      },
    ]
  }
  />
    </div>
  )
}

export default SearchMentions