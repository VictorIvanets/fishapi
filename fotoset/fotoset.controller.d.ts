import { FotosetService } from './fotoset.service';
import { FileElemResponse } from './fotoset.dto';
import { GetfotoService } from 'src/getfoto/getfoto.service';
export declare class FotosetController {
    private readonly fotosetService;
    private readonly getfotoService;
    constructor(fotosetService: FotosetService, getfotoService: GetfotoService);
    uploadFoto(file: Express.Multer.File, folder: string): Promise<FileElemResponse[]>;
}
