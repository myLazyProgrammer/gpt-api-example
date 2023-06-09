import { TextArea } from '@douyinfe/semi-ui';
import { useRef } from 'react';
import { IconSend } from '@douyinfe/semi-icons';
import { useChatInputDomain } from '@/domain/chat/chatInput';

const ChatInput = () => {
  const { submitText, text, tokenLen, setText } = useChatInputDomain();

  const shiftHandle = useRef('');
  // 中文输入法标志符
  const compositionHandle = useRef(false);

  const placeholderRef = useRef<HTMLTextAreaElement>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // if (e.code === 'ArrowRight') {
    //   setText((t) => `${t}${associationalWord}`);
    // }

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      shiftHandle.current = shiftHandle.current === e.code ? '' : e.code;
    }

    if (
      e.code === 'Enter' &&
      !shiftHandle.current &&
      !compositionHandle.current
    ) {
      submitText();
      e.preventDefault();
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (placeholderRef.current) {
      placeholderRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const toggleCompositionHandle = () => {
    compositionHandle.current = !compositionHandle.current;
  };

  return (
    <div className="tw-bg-gray-100 tw-p-10">
      <div className="tw-mb-6">tokens: {tokenLen}</div>
      <div className="tw-flex">
        <div className="tw-flex-1  tw-mr-10">
          <TextArea
            value={text}
            onChange={setText}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            placeholder="write a message"
            onCompositionStart={toggleCompositionHandle}
            onCompositionEnd={toggleCompositionHandle}
          />
        </div>
        <div className="tw-flex tw-items-center">
          <IconSend className="tw-cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
