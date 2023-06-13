import { Topic } from '@/types/db';
import { init, getInstance } from 'ts-indexdb';

export const useDbDomain = () => {
  const initDb = async () => {
    await init({
      dbName: 'nextGpt',
      version: 1,
      tables: [
        {
          tableName: 'topics',
          option: { keyPath: 'id', autoIncrement: true },
          indexs: [
            {
              key: 'id',
              option: {
                unique: true,
              },
            },
            {
              key: 'name',
            },
            {
              key: 'createTime',
            },
            {
              key: 'updateTime',
            },
          ],
        },
      ],
    });
  };

  const getDbInstance = async () => {
    const instance = getInstance();
    if (instance) {
      return instance;
    }
    await initDb();
    return getInstance();
  };

  const queryAllTopics = async () => {
    const instance = await getDbInstance();

    return await instance.queryAll<Topic>({
      tableName: 'topics',
    });
  };

  const insertTopic = async () => {
    const instance = await getDbInstance();

    return await instance.insert({
      tableName: 'topics',
      data: {
        name: '测试',
        createTime: new Date().getTime(),
        updateTime: new Date().getTime(),
      },
    });
  };

  return {
    queryAllTopics,
    insertTopic,
  };
};
