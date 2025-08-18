import { GetPhotoService } from './getPhoto.service';
import { GetPhotoModel, ResponseGetPhoto } from './getPhoto.model';
export declare class GetfotoController {
    private readonly getfotoService;
    constructor(getfotoService: GetPhotoService);
    getFotoById(folder: string): Promise<ResponseGetPhoto[]>;
    getAllFotoBySetId(folder: string): Promise<GetPhotoModel[]>;
    delBySetId(folder: string): Promise<string>;
}
