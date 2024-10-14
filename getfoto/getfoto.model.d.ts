import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface GetFotoModel extends Base {
}
export declare class GetFotoModel extends TimeStamps {
    setid: string;
    filename: string;
    imgBuffer: Buffer;
}
