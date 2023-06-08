import { useRecoilState } from 'recoil';
import {
  fromEventPattern,
  concatMap,
  filter,
  from,
  map,
  scan,
  takeWhile,
} from 'rxjs';
import { v4 as uuid } from 'uuid';
import { chatListState } from './chatState';
import { getGptSK } from '@/utils/cookie';
import { fetchStream } from '@/utils/fetch';

export const useChatListState = () => {
  const [chatList, setChatList] = useRecoilState(chatListState);

  const mapChatItem = (val: string, id: string) => {
    const data = JSON.parse(val);
    return {
      content: data.choices[0].delta?.content,
      id,
    };
  };

  const startChating = async () => {
    const id = uuid();

    const { setEventHandle } = await fetchStream(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': getGptSK() || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stream: true,
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'user', content: '写出你对react与vue的理解 至少80字' },
          ],
        }),
      }
    );

    const text$ = fromEventPattern<string>(setEventHandle).pipe(
      map((i) => i.split('\n')),
      concatMap((val) => from([...val])),
      filter(Boolean),
      map((i) => i.replace('data: ', ''))
    );

    text$
      .pipe(
        takeWhile((i) => i !== '[DONE]'),
        map((i) => mapChatItem(i, id)),
        filter((i) => Boolean(i.content)),
        scan((prev, curr) => ({
          content: `${prev.content}${curr.content}`,
          id: curr.id,
        }))
      )
      .subscribe((value) => {
        setChatList((curr) => {
          if (curr.find((i) => i.id === value.id) == null) {
            return [...curr, { ...value, role: 'sss' }];
          }
          return curr.map((i) =>
            i.id === value.id ? { ...i, content: value.content } : i
          );
        });
      });
  };

  return {
    chatList,
    startChating,
  };
};
