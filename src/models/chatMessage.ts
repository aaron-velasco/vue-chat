import { Attachment } from "./attachment";

export interface ChatMessage {
    senderId: string;
    receiverId: string;
    text: string;
    timestamp: Date;
    attachment: Attachment | undefined;
}