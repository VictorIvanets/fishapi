import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface FishModel extends Base {
}
export declare class FishModel extends TimeStamps {
    setID: number;
    login: string;
    title: string;
    description: string;
    score: number;
    date: string;
    coords: number[];
    db: string;
    img: string[];
    weather: object[];
}
