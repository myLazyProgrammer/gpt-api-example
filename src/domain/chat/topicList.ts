import { useRecoilState } from 'recoil';
import { useDbDomain } from '../db';
import { topicListState } from './chatState';
import { useRequest } from 'ahooks';

export const useTopicDomain = () => {
  const { queryAllTopics } = useDbDomain();
  const [topicList, setTopicList] = useRecoilState(topicListState);
  const { loading } = useRequest(queryAllTopics, {
    onSuccess(res) {
      setTopicList(res);
    },
  });

  return {
    topicList,
    loading,
  };
};
