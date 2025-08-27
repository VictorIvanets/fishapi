import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
export interface PostCommentsModel extends Base {
}
export declare class PostCommentsModel extends TimeStamps {
    login: string;
    useId: string;
    postId: string;
    comment: string;
}
export type DelByIdResponseT = {
    success: boolean;
    id?: string;
    message?: string;
};
