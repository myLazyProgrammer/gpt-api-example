import { useChatListDomain } from '@/domain/chat';
import ChatItem from './ChatItem';

const ChatList = () => {
  const { chatList } = useChatListDomain();

  return (
    <div>
      {chatList.map((i) => (
        <ChatItem key={i.id} />
      ))}
    </div>
  );
};

export default ChatList;
