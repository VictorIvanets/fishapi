import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface Chat extends Base {
}
export declare class Chat extends TimeStamps {
    comId: string;
    title: string;
    comment?: string;
    user: string;
    createdAt: Date;
}
