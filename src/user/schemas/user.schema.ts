import { Schema ,Document} from "mongoose";

export const UserSchema =new Schema({
    user: String,
     password:String
})
export interface User extends Document{
    user: string;
    password: string;
}