import { atom } from 'recoil'

export const chatTextState = atom<string>({
  key: 'chatTextState',
  default: '',
});
