import { FotosetService } from './fotoset.service';
import { GetPhotoService } from 'src/getPhoto/getPhoto.service';
export declare class PhotosetController {
    private readonly photosetService;
    private readonly getfotoService;
    constructor(photosetService: FotosetService, getfotoService: GetPhotoService);
}
