<template>
<div class="chat-message my-4">
         <div class="flex" :class="[isSender ? 'flex-row-reverse' : '']">
            <div class="flex flex-col space-y-2 mx-2 p-4 items-start order-2" :class="[isSender ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600']">
                <span>{{ message.text }}</span>
                <small>{{ getFormattedDate(message.timestamp) }}</small>
            </div>
            <img  class="w-6 h-6 rounded-full self-center orde-1"  :src="profileImage" alt="My profile">
         </div>
      </div>
</template>

<script setup lang="ts">
import { ChatMessage } from '../models/chatMessage';
import moment from 'moment';

const props = defineProps<{message: ChatMessage, profileImage: string}>();
const isSender = props.message.senderId==='1';
const getFormattedDate = (date: Date) => { return moment().format('DD MMM YYYY / HH:MM')}
</script>