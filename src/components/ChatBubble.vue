<template>
<div class="chat-message my-4 al">
         <div class="flex" :class="[isSender ? 'flex-row-reverse' : '']">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 p-4 items-start order-2" :class="[isSender ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600']">
                <span>{{ message.text }}</span>
                <small>{{ getFormattedDate(message.timestamp) }}</small>
            </div>
            <img  class="w-6 h-6 rounded-full self-center orde-1"  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile">
         </div>
      </div>
</template>

<script setup lang="ts">
import { ChatMessage } from '../models/chatMessage';
import moment from 'moment';

const props = defineProps<{message: ChatMessage}>();
const isSender = props.message.senderId==='1';
const getFormattedDate = (date: Date) => { return moment().format('DD MMM YYYY / HH:MM')}
</script>