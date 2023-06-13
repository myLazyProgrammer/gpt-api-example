import { useSettingDomain } from '@/domain/setting';
import { Button } from '@douyinfe/semi-ui';

const KeyBindButton = () => {
  const { toggleSecureKeyModalVisible, secureKeyModalData } =
    useSettingDomain();

  return secureKeyModalData.bound ? (
    <Button type="primary" theme="solid" onClick={toggleSecureKeyModalVisible}>
      bound success
    </Button>
  ) : (
    <Button type="warning" theme="solid" onClick={toggleSecureKeyModalVisible}>
      bind your api key
    </Button>
  );
};

export default KeyBindButton;
