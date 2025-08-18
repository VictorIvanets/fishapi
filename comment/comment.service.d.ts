import { CommentModel, DelByIdResponseT } from './comment.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CommentDto } from './comment.dto';
export declare class CommentService {
    private readonly commentModel;
    constructor(commentModel: ModelType<CommentModel>);
    createComment(dto: CommentDto): Promise<CommentModel>;
    getCommentBySetId(setId: string): Promise<CommentModel[]>;
    delCommById(_id: string): Promise<DelByIdResponseT>;
    delCommBySetId(setId: string): Promise<string>;
}
