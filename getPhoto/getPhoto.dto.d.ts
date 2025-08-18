import { MFile } from 'src/fotoset/mfile.class';
export declare class GetPhotoDto {
    setid: string;
    filename: string;
    imgBuffer: Buffer;
}
export declare class LoadPhotoDto {
    files: MFile[];
    folder: string;
}
export declare class GetPhotoElemResponse {
    setid: string;
    filename: string;
    imgBuffer: Buffer;
}
