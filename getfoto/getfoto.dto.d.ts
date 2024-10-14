import { MFile } from 'src/fotoset/mfile.class';
export declare class GetFotoDto {
    setid: string;
    filename: string;
    imgBuffer: Buffer;
}
export declare class LoadFotoDto {
    files: MFile[];
    folder: string;
}
export declare class GetFotoElemResponse {
    setid: string;
    filename: string;
    imgBuffer: Buffer;
}
