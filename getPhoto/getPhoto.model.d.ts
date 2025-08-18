import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
export interface GetPhotoModel extends Base {
}
export declare class GetPhotoModel extends TimeStamps {
    setid: string;
    filename: string;
    imgBuffer: Buffer;
}
export type PhotoResponseDBT = Omit<GetPhotoModel & Required<{
    _id: Types.ObjectId;
}>, 'typegooseName'>;
export type ResponseGetPhoto = {
    originalname: string;
    _id: string;
};
export type DelPhotoByIdResponseT = {
    success: boolean;
    id?: string;
    message?: string;
};
