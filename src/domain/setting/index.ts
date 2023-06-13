import { useRecoilState, useRecoilValue } from 'recoil';
import {
  SecureKeyState,
  SecureKeyModalVisibleState,
  SecureKeyModalQuery,
  SecureKeyBoundState,
} from './settingState';
import { setGptSK } from '@/utils/cookie';

export const useSettingDomain = () => {
  const secureKeyModalData = useRecoilValue(SecureKeyModalQuery);
  const [secureKey, setSecureKey] = useRecoilState(SecureKeyState);
  const [, setSecureKeyBound] = useRecoilState(SecureKeyBoundState);
  const [, setSecureKeyModalVisible] = useRecoilState(
    SecureKeyModalVisibleState
  );

  const toggleSecureKeyModalVisible = () => {
    setSecureKeyModalVisible((visible) => !visible);
  };

  const saveSecureKey = () => {
    setGptSK(secureKey);
    setSecureKeyBound(true);
  };

  return {
    secureKeyModalData,
    toggleSecureKeyModalVisible,
    setSecureKey,
    saveSecureKey,
  };
};
