import express from 'express';
import { postMessage, getMessages } from '../controllers/messagesController';

const messagesRouter = express.Router();

messagesRouter.post('/', postMessage );

messagesRouter.get('/', getMessages );

export { messagesRouter };