import { NewCommentInput } from './dto/new-comment.input';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Chat } from './models/chat.model';
export declare class ChatService {
    private readonly chat;
    constructor(chat: ModelType<Chat>);
    create(data: NewCommentInput): Promise<Chat>;
    findOneById(comId: string): Promise<Chat>;
    findAll(title: string): Promise<Chat[]>;
    remove(comId: string): Promise<boolean>;
}
