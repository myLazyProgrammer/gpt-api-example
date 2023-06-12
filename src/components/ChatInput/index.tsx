import { TextArea } from '@douyinfe/semi-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textAreaState, associationalWordQuery } from '@/domain/chat/chatState';
import { useRef } from 'react';

const ChatInput = () => {
  const [text, setText] = useRecoilState(textAreaState);
  const associationalWord = useRecoilValue(associationalWordQuery);

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

  {
    /* <TextArea
        className={[
          'tw-absolute tw-top-0 tw-left-0 tw-z-0  tw-w-[800px] tw-text-slate-300',
          classes.textPlaceholder,
        ].join(' ')}
        value={`${text}${associationalWord}`}
        ref={placeholderRef as any}
      ></TextArea> */
  }

  return (
    <div className="tw-bg-gray-100 tw-p-10">
      <TextArea
        className="tw-w-full tw-relative tw-z-10"
        value={text}
        onChange={setText}
        onKeyDown={handleKeyPress}
        onScroll={handleScroll}
      />
    </div>
  );
};

export default ChatInput;
