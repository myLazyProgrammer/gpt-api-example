import ChatList from '@/components/ChatList';
import ChatInput from '@/components/ChatInput';
import { Layout } from '@douyinfe/semi-ui';
import HistoryList from './HistoryList';
// import { encode } from 'gpt-3-encoder';

const { Sider, Content } = Layout;

export const Home = () => {
  // console.log(encode('This is an example sentence to try encoding out on!'));

  return (
    <Layout className="tw-h-full">
      <Layout className="tw-h-full">
        <Sider className="tw-w-[200px] tw-h-full tw-bg-gray-200 tw-shadow-md">
          <HistoryList />
        </Sider>
        <Content className="tw-h-full tw-flex tw-flex-col">
          <div className="tw-flex-1">
            <ChatList />
          </div>
          <div>
            <ChatInput />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
