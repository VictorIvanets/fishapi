import { MFile } from 'src/fotoset/mfile.class';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { DelPhotoByIdResponseT, GetPhotoModel, PhotoResponseDBT, ResponseGetPhoto } from './getPhoto.model';
export declare class GetPhotoService {
    private readonly getPhotoModel;
    constructor(getPhotoModel: ModelType<GetPhotoModel>);
    getFoto(folder: string): Promise<ResponseGetPhoto[]>;
    convertToJpegMin(file: Buffer): Promise<Buffer>;
    savePhotoBd(files: MFile[], folder: string): Promise<PhotoResponseDBT>;
    getAllPhotoBySetId(setid: string): Promise<GetPhotoModel[]>;
    delBySetId(setid: string): Promise<string>;
    delPhotoById(_id: string): Promise<DelPhotoByIdResponseT>;
    delBy_Id(id: string): Promise<PhotoResponseDBT>;
}
