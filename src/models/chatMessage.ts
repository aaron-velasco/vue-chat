import { Attachment } from "./attachment";

export type ChatMessage = {
    senderId: string;
    receiverId: string;
    text: string;
    timestamp: Date;
    attachment: Attachment | undefined;
}