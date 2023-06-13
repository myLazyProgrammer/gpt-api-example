import { ChatRole } from '@/constants/chat';
import { ChatMessage } from '@/types/api/gpt';
import { Card, Avatar } from '@douyinfe/semi-ui';
import ChatContent from './ChatContent';

interface Props {
  data: ChatMessage;
}

const ChatItem: React.FC<Props> = ({ data }: Props) => {
  const isBot = data.role === ChatRole.ASSISTANT;
  const isUser = data.role === ChatRole.USER;

  return (
    <div
      className={[
        'tw-flex',
        'tw-mb-10',
        isUser ? 'tw-flex-row-reverse' : '',
      ].join(' ')}
    >
      {isBot && (
        <Avatar size="small" className="tw-mr-5 tw-flex-shrink-0">
          bot
        </Avatar>
      )}
      {isUser && (
        <Avatar size="small" className="tw-ml-5 tw-flex-shrink-0">
          user
        </Avatar>
      )}
      <Card>
        <ChatContent content={data.content}></ChatContent>
      </Card>
    </div>
  );
};

export default ChatItem;
