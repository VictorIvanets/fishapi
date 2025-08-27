import { PostsService } from './posts.service';
import { PostsDto } from './posts.dto';
import { DelByIdResponseT, PostsModel } from './posts.model';
import { PostsCommentsService } from 'src/postComments/postComments.service';
export declare class PostsController {
    private readonly postsService;
    private readonly postsCommentService;
    constructor(postsService: PostsService, postsCommentService: PostsCommentsService);
    create(dto: PostsDto, user: {
        _id: string;
        login: string;
    }): Promise<PostsModel>;
    getUserPost(user: {
        _id: string;
    }, limit?: string, cursor?: string, description?: string): Promise<{
        data: PostsModel[];
        nextCursor: string | null;
    }>;
    getAllPost(limit?: string, cursor?: string, description?: string): Promise<{
        data: PostsModel[];
        nextCursor: string | null;
    }>;
    delSet(id: string): Promise<DelByIdResponseT>;
    getPostById(id: string): Promise<PostsModel>;
}
