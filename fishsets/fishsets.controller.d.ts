import { FishsetsService } from './fishsets.service';
import { FishDto } from './fishsets.dto';
import { CommentService } from 'src/comment/comment.service';
import { GetfotoService } from 'src/getfoto/getfoto.service';
export declare class FishsetsController {
    private readonly fishService;
    private readonly commentService;
    private readonly getfotoService;
    constructor(fishService: FishsetsService, commentService: CommentService, getfotoService: GetfotoService);
    sets(dto: FishDto): Promise<unknown>;
    getSets(login: string): Promise<object>;
    getAllSets(db: string): Promise<object>;
    delSet(id: string): Promise<string>;
    getSetsById(id: string): Promise<object>;
}
