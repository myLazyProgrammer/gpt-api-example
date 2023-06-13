import { useChatListDomain } from '@/domain/chat';
import ChatItem from './ChatItem';

const ChatList = () => {
  const { chatList } = useChatListDomain();

  return (
    <div className="tw-p-10">
      {chatList.map((i) => (
        <ChatItem key={i.id} data={i} />
      ))}
    </div>
  );
};

export default ChatList;
