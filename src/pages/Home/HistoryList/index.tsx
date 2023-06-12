import { Card } from '@douyinfe/semi-ui';
import { IconCopyAdd } from '@douyinfe/semi-icons';

const HistoryList = () => {
  return (
    <div className="tw-p-5">
      <Card className="tw-cursor-pointer">
        <div className="tw-flex tw-items-center">
          <IconCopyAdd className="tw-mr-5" />
          new Chat
        </div>
      </Card>
    </div>
  );
};

export default HistoryList;
