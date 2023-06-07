export const fetchStream = async (url: string, init?: RequestInit ) => {
  const response = await fetch(url, init)
  const reader = (response.body as ReadableStream<Uint8Array>).pipeThrough(new TextDecoderStream()).getReader();

  let eventHandle: (val: string) => void

  const setEventHandle = (handle: (val: string) => void) => {
    eventHandle = handle
  }

  const pipeStream = async () => {
    const {done, value} = await reader.read();
    if (value) {
      eventHandle(value)
    }
    if (!done) {
      requestAnimationFrame(pipeStream);
    } else {
    }
  }
  pipeStream();

  return {
    setEventHandle,
  }
}