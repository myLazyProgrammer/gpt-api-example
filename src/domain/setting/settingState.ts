import { getGptSK } from '@/utils/cookie';
import { hideString } from '@/utils/str';
import { atom, selector } from 'recoil';

export const SecureKeyState = atom({
  key: 'SecureKey',
  default: hideString(getGptSK() || '', 10, 10),
});

export const SecureKeyBoundState = atom({
  key: 'SecureKeyBound',
  default: !!getGptSK(),
});

export const SecureKeyModalVisibleState = atom({
  key: 'SecureKeyModalVisible',
  default: false,
});

export const SecureKeyModalQuery = selector({
  key: 'SecureKeyModal',
  get: ({ get }) => {
    return {
      visible: get(SecureKeyModalVisibleState),
      sk: get(SecureKeyState),
      bound: get(SecureKeyBoundState),
    };
  },
});
