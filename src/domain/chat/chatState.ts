import { ChatMessage } from '@/types/api/gpt';
import { atom, selector } from 'recoil';

export const chatListState = atom<ChatMessage[]>({
  key: 'chatList',
  default: [],
});

export const textAreaState = atom<string>({
  key: 'textAreaState',
  default: '',
});

export const associationalWordQuery = selector<string>({
  key: 'associationalWordQuery',
  get: ({ get }) => {
    const text = get(textAreaState);
    return `${Math.random().toString(32)}`;
  },
});
