<template>
    <section class="flex flex-col w-screen border-t-2 border-gray-300">
        <div class="w-100">
            <h1 class="text-center text-xl font-bold border-b-2 py-4 border-gray-600">Comentarios</h1>
        </div>
        <div v-for="message in currentChatContent">
            <ChatBubble :message="message" />
        </div>
        <form>
            <div class="flex items-center px-3 py-2 rounded-xl ">
                <input id="chat" type="text"
                    class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-full border border-gray-300"
                    placeholder="" />
                <button type="submit"
                    class="inline-flex justify-center p-2 text-white bg-blue-500 rounded-full cursor-pointer ">
                    <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                        </path>
                    </svg>
                </button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
import { useChatStore } from "../store/store"
import { storeToRefs } from 'pinia'
import ChatBubble from './ChatBubble.vue';

const { fetchChat } = useChatStore()
fetchChat();
const { currentChatContent } = storeToRefs(useChatStore())
</script>