import { PostsCommentsService } from './postComments.service';
import { DelByIdResponseT, PostCommentsModel } from './postComments.model';
import { PostCommentsDto } from './postCommentsdto';
import { PostsService } from 'src/posts/posts.service';
export declare class PostsCommentsController {
    private readonly postsCommentService;
    private readonly postsService;
    constructor(postsCommentService: PostsCommentsService, postsService: PostsService);
    setComment(dto: PostCommentsDto, user: {
        _id: string;
        login: string;
    }): Promise<PostCommentsModel>;
    getComment(postId: string): Promise<PostCommentsModel[]>;
    delComment(commentId: string, postId: string): Promise<DelByIdResponseT>;
    delAllComment(setId: string): Promise<DelByIdResponseT>;
}
