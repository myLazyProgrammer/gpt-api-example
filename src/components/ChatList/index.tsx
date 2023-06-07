import {  useChatListState } from '@/domain/chat'
import { Button } from '@douyinfe/semi-ui/'

export default () => {

  const {chatText, startChating} = useChatListState()

  return <div>
    <div>
    {chatText}
    </div>
    <Button onClick={startChating}>
      测试
    </Button>
  </div>
}