import { NewCommentInput } from './dto/new-comment.input';
import { ChatService } from './chat.service';
import { Chat } from './models/chat.model';
export declare class ChatResolver {
    private readonly chatService;
    constructor(chatService: ChatService);
    comment(comId: string): Promise<Chat>;
    allComments(): Promise<Chat[]>;
    addComment(newCommentData: NewCommentInput): Promise<Chat>;
    deleteComment(comId: string): Promise<boolean>;
    commentAdded(): AsyncIterator<unknown, any, any>;
}
