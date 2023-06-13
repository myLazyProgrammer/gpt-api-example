import ChatList from './ChatList';
import ChatInput from './ChatInput';
import { Button, Layout } from '@douyinfe/semi-ui';
import HistoryList from './HistoryList';
import { IconCopyAdd } from '@douyinfe/semi-icons';
import KeyBindButton from './KeyBindButton';
import KeyModal from './KeyModal';

const { Sider, Content } = Layout;

export const Home = () => {
  return (
    <>
      <KeyModal />
      <Layout className="tw-h-full">
        <Layout className="tw-h-full">
          <Sider className="tw-w-[200px] tw-h-full tw-bg-gray-200 tw-shadow-md tw-py-5 tw-flex-shrink-0">
            <div className="tw-flex tw-flex-col tw-h-full ">
              <div className="tw-px-5 tw-pb-5">
                <Button size="large" className="tw-w-full">
                  <div className="tw-flex tw-items-center">
                    <IconCopyAdd className="tw-mr-5" />
                    new Chat
                  </div>
                </Button>
              </div>
              <div className="tw-flex-1 tw-overflow-y-auto">
                <HistoryList />
              </div>
              <div className="tw-px-5 tw-pt-5">
                <KeyBindButton />
              </div>
            </div>
          </Sider>
          <Content className="tw-h-full tw-flex tw-flex-col">
            <div className="tw-flex-1 tw-overflow-y-auto">
              <ChatList />
            </div>
            <div>
              <ChatInput />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
