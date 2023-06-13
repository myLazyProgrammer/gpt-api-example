import { useRecoilState, useRecoilValue } from 'recoil';
import { textAreaState, tokenLenQuery } from './chatState';
import { useChatListDomain } from '.';

export const useChatInputDomain = () => {
  const [text, setText] = useRecoilState(textAreaState);
  const { startChating } = useChatListDomain();
  const tokenLen = useRecoilValue(tokenLenQuery);

  const submitText = () => {
    if (!text.trim()) {
      return;
    }
    startChating(text);
    setText('');
  };

  return {
    text,
    submitText,
    tokenLen,
    setText,
  };
};
