import { TextArea } from '@douyinfe/semi-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  textAreaState,
  associationalWordQuery,
  tokenLenQuery,
} from '@/domain/chat/chatState';
import { useRef } from 'react';
import { IconSend } from '@douyinfe/semi-icons';

const ChatInput = () => {
  const [text, setText] = useRecoilState(textAreaState);
  const associationalWord = useRecoilValue(associationalWordQuery);
  const tokenLen = useRecoilValue(tokenLenQuery);

  const placeholderRef = useRef<HTMLTextAreaElement>();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'ArrowRight') {
      setText((t) => `${t}${associationalWord}`);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (placeholderRef.current) {
      placeholderRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  return (
    <div className="tw-bg-gray-100 tw-p-10">
      <div className="tw-mb-6">tokens: {tokenLen}</div>
      <div className="tw-flex">
        <TextArea
          className="tw-w-full tw-relative tw-z-10 tw-flex-1 tw-mr-10"
          value={text}
          onChange={setText}
          onKeyDown={handleKeyPress}
          onScroll={handleScroll}
        />
        <div className="tw-flex tw-items-center">
          <IconSend className="tw-cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
