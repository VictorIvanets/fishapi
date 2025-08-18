import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface CommentModel extends Base {
}
export declare class CommentModel extends TimeStamps {
    login: string;
    useId: string;
    setId: string;
    comment: string;
}
export type DelByIdResponseT = {
    success: boolean;
    id?: string;
    message?: string;
};
