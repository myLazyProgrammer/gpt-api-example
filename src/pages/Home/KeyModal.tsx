import { useSettingDomain } from '@/domain/setting';
import { Modal, Form, Toast } from '@douyinfe/semi-ui';
import { useRef } from 'react';

const KeyModal = () => {
  const {
    secureKeyModalData,
    setSecureKey,
    saveSecureKey,
    toggleSecureKeyModalVisible,
  } = useSettingDomain();
  const formRef = useRef<Form['formApi']>();

  const handleConfirm = async () => {
    await formRef.current?.validate();
    saveSecureKey();
    Toast.success('key binding success');
    toggleSecureKeyModalVisible();
  };

  const getFormApi = (formApi: Form['formApi']) => {
    formRef.current = formApi;
  };

  return (
    <Modal
      title="key binding"
      visible={secureKeyModalData.visible}
      onOk={handleConfirm}
      onCancel={toggleSecureKeyModalVisible}
    >
      <Form
        layout="vertical"
        wrapperCol={{ span: 18 }}
        labelCol={{ span: 6 }}
        labelPosition="left"
        labelAlign="right"
        getFormApi={getFormApi}
        initValues={{ secureKey: secureKeyModalData.sk }}
      >
        <Form.Input
          placeholder={'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
          field="secureKey"
          onChange={setSecureKey}
          required
          rules={[{ required: true, message: 'please enter your secure key' }]}
        ></Form.Input>
      </Form>
    </Modal>
  );
};

export default KeyModal;
