import { ChatMessage } from '@/types/api/gpt';
import { atom } from 'recoil';

export const chatListState = atom<ChatMessage[]>({
  key: 'chatList',
  default: [],
});
