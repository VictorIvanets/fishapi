import { GetfotoService } from './getfoto.service';
import { GetFotoModel } from './getfoto.model';
export declare class GetfotoController {
    private readonly getfotoService;
    constructor(getfotoService: GetfotoService);
    getFotoById(folder: string): Promise<string[]>;
    getAllFotoBySetId(folder: string): Promise<GetFotoModel[]>;
    delBySetId(folder: string): Promise<string>;
}
