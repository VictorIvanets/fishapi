import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';
export interface PostsModel extends Base {
}
export declare class PostsModel extends TimeStamps {
    userLogin: string;
    userId: Types.ObjectId;
    description: string;
    colorSchema: string;
}
export type PostsResponseDBT = Omit<PostsModel & Required<{
    _id: Types.ObjectId;
}>, 'typegooseName'>;
export type DelByIdResponseT = {
    success: boolean;
    id?: string;
    message?: string;
};
