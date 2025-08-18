import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { ImageT, WeatherT } from './fishings.dto';
import { Types } from 'mongoose';
export interface FishingsModel extends Base {
}
export declare class FishingsModel extends TimeStamps {
    folderName: number;
    userName: string;
    userId: Types.ObjectId;
    title: string;
    description: string;
    score: number;
    date: string;
    coords: number[];
    db: string;
    img: ImageT[];
    weather: WeatherT;
    paid?: PaidFishingT;
}
export type FishingsResponseDBT = Omit<FishingsModel & Required<{
    _id: Types.ObjectId;
}>, 'typegooseName'>;
export type ResponseForMapT = {
    _id: string;
    title: string;
    coords: number[];
    score: number;
    description: string;
    userId: string;
    paid?: PaidFishingT;
};
export type PaidFishingT = {
    title: string;
    price: number;
    owner: string;
    contact: string[];
};
