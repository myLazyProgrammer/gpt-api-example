import { useChatListState } from '@/domain/chat';
import ChatItem from './ChatItem';

const ChatList = () => {
  const { chatList } = useChatListState();

  return (
    <div>
      {chatList.map((i) => (
        <ChatItem key={i.id} />
      ))}
    </div>
  );
};

export default ChatList;
