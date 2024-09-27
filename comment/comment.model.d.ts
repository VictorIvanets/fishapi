import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface CommentModel extends Base {
}
export declare class CommentModel extends TimeStamps {
    commId: number;
    login: string;
    setId: string;
    comment: string;
    db: string;
}
