<template>
<div class="chat-message my-4 al">
         <div class="flex justify-between align border-b-2 border-gray-200 px-8">
            <div class="flex flex-col space-y-2 max-w-xs mx-2 p-4 items-start" >
                <span>VERSIÓN {{ message.attachment?.version }}</span>
                <span class="text-blue-400 font-bold">{{ message.attachment?.name }}</span>
                <span>{{ message.attachment?.filetype }} {{ getFormattedDate(message.timestamp) }}</span>
            </div>
            <a class="self-center" :href="message?.attachment?.url"><img src="https://img.icons8.com/ios-glyphs/30/null/download-from-cloud--v1.png"/></a>
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