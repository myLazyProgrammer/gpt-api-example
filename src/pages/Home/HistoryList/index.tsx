import { useTopicDomain } from '@/domain/chat';
import { Spin, List } from '@douyinfe/semi-ui';
import dayjs from 'dayjs';

const HistoryList = () => {
  const { topicList, loading } = useTopicDomain();

  return (
    <Spin wrapperClassName="tw-py-5" spinning={loading}>
      <List
        dataSource={topicList}
        renderItem={(item) => (
          <List.Item className="tw-px-5 tw-flex tw-cursor-pointer">
            <div className="tw-flex-1 tw-mr-2 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
              {item.name}
            </div>
            {dayjs(item.updateTime).format('YYYY-MM-DD')}
          </List.Item>
        )}
      ></List>
    </Spin>
  );
};

export default HistoryList;
