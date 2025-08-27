import { DelByIdResponseT, PostCommentsModel } from './postComments.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { PostCommentsDto } from './postCommentsdto';
export declare class PostsCommentsService {
    private readonly postCommentsModel;
    constructor(postCommentsModel: ModelType<PostCommentsModel>);
    createComment(dto: PostCommentsDto, user: {
        _id: string;
        login: string;
    }): Promise<PostCommentsModel>;
    getCommentBySetId(postId: string): Promise<PostCommentsModel[]>;
    delCommById(_id: string): Promise<DelByIdResponseT>;
    delCommBySetId(postId: string): Promise<DelByIdResponseT>;
}
