import { CommentService } from './comment.service';
import { CommentDto } from './comment.dto';
import { CommentModel } from './comment.model';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    setComment(dto: CommentDto): Promise<CommentModel>;
    getComment(setId: string): Promise<CommentModel[]>;
    delComment(id: string): Promise<string>;
    delAllComment(setId: string): Promise<string>;
}
