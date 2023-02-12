import { Attachment } from "./attachment";

export type chatMessage = {
    senderId: string;
    receiverId: string;
    text: string;
    timestamp: Date;
    attachment: Attachment;
}