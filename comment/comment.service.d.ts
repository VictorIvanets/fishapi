import { CommentModel } from './comment.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CommentDto } from './comment.dto';
export declare class CommentService {
    private readonly commentModel;
    constructor(commentModel: ModelType<CommentModel>);
    createComment(dto: CommentDto): Promise<CommentModel>;
    getCommentBySetId(setId: string): Promise<CommentModel[]>;
    delCommById(commId: string): Promise<string>;
    delCommBySetId(setId: string): Promise<string>;
}
