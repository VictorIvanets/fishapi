import { ModelType } from '@typegoose/typegoose/lib/types';
import { FileElemResponseT } from './photo.types';
import { MFile } from './mfile.class';
import { FishingsModel } from 'src/fishings/fishings.model';
export declare class PhotoService {
    private readonly fishingsModel;
    constructor(fishingsModel: ModelType<FishingsModel>);
    savePhoto(files: MFile[], setid: string, imgId: string): Promise<FileElemResponseT[]>;
    convertToWebp(file: Buffer): Promise<Buffer>;
}
