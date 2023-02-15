import { ChatMessage } from '../models/chatMessage';
import { Attachment } from '../models/attachment';

export const testChat: ChatMessage[] = [
    {
        senderId: '1',
        receiverId: '2',
        text: '',
        timestamp: new Date('2018-12-28T14:45'),
        attachment: {
            id: '1',
            name: 'Titulo del archivo a subir 2.pdf',
            url: 'testurl',
            timestamp: new Date('2018-12-28T14:45'),
            filetype: 'Documento/PDF',
            version: '1'
        }
    },
    {
        senderId: '1',
        receiverId: '2',
        text: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.',
        timestamp: new Date('2018-12-28T14:45'),
        attachment: undefined,
    },
    {
        senderId: '2',
        receiverId: '1',
        text: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.',
        timestamp: new Date('2018-12-29T10:11'),
        attachment: undefined,
    },
    {
        senderId: '1',
        receiverId: '2',
        text: '',
        timestamp: new Date('2018-12-30T08:22'),
        attachment: {
            id: '2',
            name: 'Titulo del archivo a subir 2.pdf',
            url: 'testurl',
            timestamp: new Date('2018-12-30T08:22'),
            filetype: 'Documento/PDF',
            version: '2'
        }
    },
    {
        senderId: '1',
        receiverId: '2',
        text: 'Realizados cambios según feedback',
        timestamp: new Date('2018-12-30T08:22'),
        attachment: undefined,
    },
    {
        senderId: '2',
        receiverId: '1',
        text: 'Perfecto, excelente trabajo.',
        timestamp: new Date('2018-12-30T15:25'),
        attachment: undefined,
    },

]