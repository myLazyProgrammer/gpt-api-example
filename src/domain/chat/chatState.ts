import { ChatMessage } from '@/types/api/gpt';
import { atom, selector } from 'recoil';
import { encode } from 'gpt-3-encoder-browser';

export const chatListState = atom<ChatMessage[]>({
  key: 'chatList',
  default: [],
});

export const textAreaState = atom<string>({
  key: 'textArea',
  default: '',
});

export const tokenLenQuery = selector<number>({
  key: 'tokenLen',
  get: ({ get }) => {
    const text = get(textAreaState);
    return encode(text).length;
  },
});

export const associationalWordQuery = selector<string>({
  key: 'associationalWord',
  get: () => {
    return `${Math.random().toString(32)}`;
  },
});
