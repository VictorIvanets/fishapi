import { FishsetsService } from './fishsets.service';
import { CommentService } from 'src/comment/comment.service';
import { GetPhotoService } from 'src/getPhoto/getPhoto.service';
export declare class FishsetsController {
    private readonly fishService;
    private readonly commentService;
    private readonly getfotoService;
    constructor(fishService: FishsetsService, commentService: CommentService, getfotoService: GetPhotoService);
}
