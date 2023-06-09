import { ChatRole } from '@/constants/chat';

export interface ChatModel {
  id: string;
  object: string;
  owner_bt: string;
}

export interface GetChatModelsResponse {
  data: ChatModel[];
  object: string;
}

export interface ChatMessage {
  content: string;
  role: ChatRole;
  id: string;
}

export interface StartChatRequest {
  message: ChatMessage;
  model: string;
  stream: boolean;
}
