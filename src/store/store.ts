import { defineStore } from 'pinia'
import { chatMessage } from '../models/chatMessage';

interface ChatState {
    user: any;
    profile: any;
    chatList: chatMessage[];
    currentChatId: string;
  }

export const useAlertsStore = defineStore("store", {
  state: (): ChatState => ({
    user: 'CS',
    profile: '',
    chatList: [],
    currentChatId: ''
  }),
  getters: {},
  actions: {
    async fetchChat(): Promise<void> {
        
    }
  },
})