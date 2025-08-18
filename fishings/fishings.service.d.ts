import { FishingsModel, FishingsResponseDBT, ResponseForMapT } from './fishings.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { FishingsDto } from './fishings.dto';
export declare class FishingsService {
    private readonly fishingsModel;
    constructor(fishingsModel: ModelType<FishingsModel>);
    createFishing(dto: FishingsDto, user: {
        _id: string;
        login: string;
    }): Promise<FishingsModel>;
    updateFishing(id: string, dto: FishingsDto): Promise<FishingsModel>;
    deletePhotoInFishing(dto: {
        photoId: string;
        setId: string;
    }): Promise<FishingsModel>;
    findUserFishings(user: {
        _id: string;
    }, limit: number, cursor?: string, title?: string, description?: string): Promise<{
        data: FishingsModel[];
        nextCursor: string | null;
    }>;
    findAllFishing(limit: number, cursor?: string, title?: string, description?: string): Promise<{
        data: FishingsModel[];
        nextCursor: string | null;
    }>;
    findAllPaidFishing(limit: number, cursor?: string, title?: string, description?: string): Promise<{
        data: FishingsModel[];
        nextCursor: string | null;
    }>;
    findAllFishingRorMap(): Promise<ResponseForMapT[]>;
    delById(id: string): Promise<FishingsResponseDBT>;
    getFishingById(id: string): Promise<FishingsModel>;
}
