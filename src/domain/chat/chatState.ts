import { ChatMessage } from '@/types/api/gpt';
import { atom, selector } from 'recoil';
import { encode } from 'gpt-3-encoder-browser';

export const chatListState = atom<ChatMessage[]>({
  key: 'chatList',
  default: [],
});

export const textAreaState = atom<string>({
  key: 'textAreaState',
  default: '',
});

export const tokenLenQuery = selector<number>({
  key: 'tokenLenState',
  get: ({ get }) => {
    const text = get(textAreaState);
    return encode(text).length;
  },
});

export const associationalWordQuery = selector<string>({
  key: 'associationalWordQuery',
  get: () => {
    return `${Math.random().toString(32)}`;
  },
});
