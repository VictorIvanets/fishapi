import { PostsCommentsService } from './postComments.service';
import { DelByIdResponseT, PostCommentsModel } from './postComments.model';
import { PostCommentsDto } from './postCommentsdto';
export declare class PostsCommentsController {
    private readonly postsCommentService;
    constructor(postsCommentService: PostsCommentsService);
    setComment(dto: PostCommentsDto, user: {
        _id: string;
        login: string;
    }): Promise<PostCommentsModel>;
    getComment(postId: string): Promise<PostCommentsModel[]>;
    delComment(id: string): Promise<DelByIdResponseT>;
    delAllComment(setId: string): Promise<DelByIdResponseT>;
}
