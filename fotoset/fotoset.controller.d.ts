import { FotosetService } from './fotoset.service';
import { FileElemResponse } from './fotoset.dto';
export declare class FotosetController {
    private readonly fotosetService;
    constructor(fotosetService: FotosetService);
    uploadFoto(file: Express.Multer.File, folder: string): Promise<FileElemResponse[]>;
}
