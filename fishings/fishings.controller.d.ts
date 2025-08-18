import { FishingsService } from './fishings.service';
import { FishingsDto } from './fishings.dto';
import { CommentService } from 'src/comment/comment.service';
import { GetPhotoService } from 'src/getPhoto/getPhoto.service';
import { FishingsModel, FishingsResponseDBT, ResponseForMapT } from './fishings.model';
import { DelPhotoByIdResponseT } from 'src/getPhoto/getPhoto.model';
export declare class FishingsController {
    private readonly fishingsService;
    private readonly commentService;
    private readonly getfotoService;
    constructor(fishingsService: FishingsService, commentService: CommentService, getfotoService: GetPhotoService);
    create(dto: FishingsDto, user: {
        _id: string;
        login: string;
    }): Promise<FishingsModel>;
    update(dto: FishingsDto, id: string): Promise<FishingsModel>;
    dletePhoto(dto: {
        photoId: string;
        setId: string;
    }): Promise<DelPhotoByIdResponseT>;
    getFishing(user: any, limit?: string, cursor?: string, title?: string, description?: string): Promise<{
        data: FishingsModel[];
        nextCursor: string | null;
    }>;
    getAllFishings(limit?: string, cursor?: string, title?: string, description?: string): Promise<{
        data: FishingsModel[];
        nextCursor: string | null;
    }>;
    getAllPaidFishings(limit?: string, cursor?: string, title?: string, description?: string): Promise<{
        data: FishingsModel[];
        nextCursor: string | null;
    }>;
    getAllFishingsForMap(): Promise<ResponseForMapT[]>;
    delSet(id: string): Promise<FishingsResponseDBT>;
    getSetsById(id: string): Promise<object>;
}
