import { defineStore } from 'pinia'
import { ChatMessage } from '../models/chatMessage';
import { testChat } from './testchat';

interface ChatState {
  user: any;
  profile: any;
  currentChatContent: ChatMessage[];
  currentChatId: string;
}

export const useChatStore = defineStore("store", {
  state: (): ChatState => ({
    user: '1',
    profile: '',
    currentChatContent: [],
    currentChatId: ''
  }),
  getters: {
    getCurrentChatId(state): string {
      return state.currentChatId;
    },
    getChatContent(state): ChatMessage[] {
      return state.currentChatContent;
    }
  },
  actions: {
    fetchChat(): void {
      this.currentChatContent = testChat;
    }
  },
})