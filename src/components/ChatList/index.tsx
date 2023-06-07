import {  useChatListState } from '@/domain/chat'
import { Button, List } from '@douyinfe/semi-ui/'

export default () => {

  const {chatList, startChating} = useChatListState()

  return <div>
    <div>
      <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={chatList}
          renderItem={item => <List.Item>{item.content}</List.Item>}
      />
    </div>
    <Button onClick={startChating}>
      测试
    </Button>
  </div>
}