import * as gpt from './gpt';

export default class NextGptService {
  public getGptModels!: () => gpt.GetChatModelsResponse;
}