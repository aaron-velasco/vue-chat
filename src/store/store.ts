import { defineStore } from 'pinia'
import { ChatMessage } from '../models/chatMessage';
import { testChat } from './testchat';

interface ChatState {
  userId: string;
  profileImage: string;
  recieverImage: string;
  currentChatContent: ChatMessage[];
  currentChatId: string;
}

export const useChatStore = defineStore("store", {
  state: (): ChatState => ({
    userId: '1',
    profileImage: 'https://images.unsplash.com/photo-1529232356377-57971f020a94?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144',
    recieverImage: '',
    currentChatContent: [],
    currentChatId: ''
  }),
  getters: {
    getCurrentUserId(state): string {
      return state.userId
    },
    getCurrentChatId(state): string {
      return state.currentChatId;
    },
    getChatContent(state): ChatMessage[] {
      return state.currentChatContent;
    }
  },
  actions: {
    fetchChat(): void {
      this.recieverImage = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144';
      this.currentChatContent = testChat;
    }
  },
})