import { ModelType } from '@typegoose/typegoose/lib/types';
import { FileElemResponse } from './fotoset.dto';
import { MFile } from './mfile.class';
import { FishModel } from 'src/fishsets/fishsets.model';
export declare class FotosetService {
    private readonly fishModel;
    constructor(fishModel: ModelType<FishModel>);
    saveFoto(files: MFile[], folder: string): Promise<FileElemResponse[]>;
    convertToWebp(file: Buffer): Promise<Buffer>;
}
