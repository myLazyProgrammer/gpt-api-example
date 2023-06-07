import { ChatMessage } from '@/types/api/gpt';
import { atom, selector } from 'recoil'

export const chatListState = atom<ChatMessage[]>({
  key: 'chatList',
  default: [],
});
