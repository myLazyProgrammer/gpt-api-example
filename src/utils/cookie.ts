import Cookie from 'js-cookie';

const GPT_SK_KEY = 'GPT_SK'

export const setGptSK = (sk: string) => {
  Cookie.set(GPT_SK_KEY, sk)
}


export const getGptSK = () => {
  return Cookie.get(GPT_SK_KEY)
}