import { FishModel } from './fishsets.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { FishDto } from './fishsets.dto';
export declare class FishsetsService {
    private readonly fishModel;
    constructor(fishModel: ModelType<FishModel>);
    createSets(dto: FishDto): Promise<FishModel>;
    findUserSets(login: string): Promise<FishModel[]>;
    findAllSets(db: string): Promise<Omit<FishModel[], 'login'>>;
    delById(setID?: string): Promise<string>;
    getSetsById(setID: string): Promise<FishModel>;
}
