import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface FotoModel extends Base {
}
export declare class FotoModel extends TimeStamps {
    setID: number;
    coords: number[];
}
