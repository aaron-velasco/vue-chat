import { ChatMessage } from '../models/chatMessage';
import { Attachment } from '../models/attachment';

export const testChat: ChatMessage[] = [
    {
        senderId: '1',
        receiverId: '2',
        text: '',
        timestamp: new Date('28/12/2018 14:45:01'),
        attachment: {
            id: '1',
            name: 'Titulo del archivo a subir 2.pdf',
            url: 'testurl',
            timestamp: new Date('28/12/2018 14:45'),
            filetype: 'Documento/PDF',
        }
    },
    {
        senderId: '1',
        receiverId: '2',
        text: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.',
        timestamp: new Date('28/12/2018 14:45:30'),
        attachment: undefined,
    },
    {
        senderId: '2',
        receiverId: '1',
        text: '¡Gran trabajo Sivial! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.',
        timestamp: new Date('29/12/2018 10:11:01'),
        attachment: undefined,
    },
    {
        senderId: '1',
        receiverId: '2',
        text: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.',
        timestamp: new Date('30/12/2018 08:22:00'),
        attachment: {
            id: '2',
            name: 'Titulo del archivo a subir 2.pdf',
            url: 'testurl',
            timestamp: new Date('30/12/2018 08:22:00'),
            filetype: 'Documento/PDF',
        }
    },
    {
        senderId: '1',
        receiverId: '2',
        text: 'Realizados cambios según feedback',
        timestamp: new Date('30/12/2018 08:22:30'),
        attachment: undefined,
    },
    {
        senderId: '2',
        receiverId: '1',
        text: 'Perfecto, excelente trabajo.',
        timestamp: new Date('30/12/2018 15:25:01'),
        attachment: undefined,
    },

]