import { CommentService } from './comment.service';
import { CommentDto } from './comment.dto';
import { CommentModel, DelByIdResponseT } from './comment.model';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    setComment(dto: CommentDto): Promise<CommentModel>;
    getComment(setId: string): Promise<CommentModel[]>;
    delComment(id: string): Promise<DelByIdResponseT>;
    delAllComment(setId: string): Promise<string>;
}
