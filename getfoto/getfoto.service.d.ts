import { MFile } from 'src/fotoset/mfile.class';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { GetFotoModel } from './getfoto.model';
export declare class GetfotoService {
    private readonly getFotoModel;
    constructor(getFotoModel: ModelType<GetFotoModel>);
    getFoto(folder: string): Promise<string[]>;
    saveFotoBd(files: MFile[], folder: string): Promise<string>;
    getAllFotoBySetId(setid: string): Promise<GetFotoModel[]>;
    delBySetId(setid: string): Promise<string>;
}
