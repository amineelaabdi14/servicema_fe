import { Comment } from "./Comment.model";

export interface Service {
    id: number;
    title: string;
    user:string;
    description: string;
    startingPrice: number;
    image: number;
    category: string;
    comments: Comment[];
}