import { FishsetsService } from './fishsets.service';
import { FishDto } from './fishsets.dto';
export declare class FishsetsController {
    private readonly fishService;
    constructor(fishService: FishsetsService);
    sets(dto: FishDto): Promise<unknown>;
    getSets(login: string): Promise<object>;
    getAllSets(db: string): Promise<object>;
    delSet(id: string): Promise<string>;
    getSetsById(id: string): Promise<object>;
}
