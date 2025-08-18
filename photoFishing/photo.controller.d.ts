import { FileElemResponseT } from './photo.types';
import { GetPhotoService } from 'src/getPhoto/getPhoto.service';
import { PhotoService } from './photo.service';
export declare class PhotoController {
    private readonly photoService;
    private readonly getfotoService;
    constructor(photoService: PhotoService, getfotoService: GetPhotoService);
    uploadPhoto(file: Express.Multer.File, setid: string): Promise<FileElemResponseT[]>;
}
