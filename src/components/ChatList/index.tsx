import { useChatListState } from '@/domain/chat';
import { Button, List } from '@douyinfe/semi-ui/';

const ChatList = () => {
  const { chatList, startChating } = useChatListState();

  return (
    <div>
      <div>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={chatList}
          renderItem={(item) => <List.Item>{item.content}</List.Item>}
        />
      </div>
      <Button onClick={startChating}>测试</Button>
    </div>
  );
};

export default ChatList;
