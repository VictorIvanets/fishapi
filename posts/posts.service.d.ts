import { DelByIdResponseT, PostsModel } from './posts.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { PostsDto } from './posts.dto';
export declare class PostsService {
    private readonly postsModel;
    constructor(postsModel: ModelType<PostsModel>);
    createPost(dto: PostsDto, user: {
        _id: string;
        login: string;
    }): Promise<PostsModel>;
    updateCommentPost(id: string, delta: number): Promise<PostsModel>;
    myPosts(user: {
        _id: string;
    }, limit: number, cursor?: string, description?: string): Promise<{
        data: PostsModel[];
        nextCursor: string | null;
    }>;
    allPosts(limit: number, cursor?: string, description?: string): Promise<{
        data: PostsModel[];
        nextCursor: string | null;
    }>;
    delById(id: string): Promise<DelByIdResponseT>;
    getPostById(id: string): Promise<PostsModel>;
}
