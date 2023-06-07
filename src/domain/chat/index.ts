import { useRecoilState } from 'recoil'
import { chatTextState } from './chatState'
import { Observable, Subject, buffer, concatMap, filter, from, map, of, scan } from 'rxjs'
import { getGptSK } from '@/utils/cookie'
import axios from 'axios'

export const useChatListState = () => {

  const [chatText, setChatText] = useRecoilState(chatTextState);

  const startChating = async () => {
    const subject$ = new Subject<string>();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': getGptSK() || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stream: true,
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "写出你对react与vue的理解 至少80字"}],
      })
    })


    const reader = (response.body as ReadableStream<Uint8Array>).pipeThrough(new TextDecoderStream()).getReader();

    const pipeStream = async () => {
      const {done, value} = await reader.read();
      if (value) {
        subject$.next(value)
      }
      if (!done) {
        requestAnimationFrame(pipeStream);
      } else {
        subject$.complete();
      }
    }
    pipeStream();

    subject$.pipe(
      map(i => i.split('\n')),
      concatMap(val => from([...val])),
      filter(Boolean),
      map(i => i.replace('data: ', '')),
      filter(i => !i.includes('[DONE]')),
      map(i => JSON.parse(i).choices[0].delta?.content),
      filter(Boolean),
      scan((prev, curr) => `${prev}${curr}`)
    ).subscribe(
      setChatText
    )

  }

  


  return {
    chatText,
    startChating
  } 
}