
import { z } from "zod";



const ReviewSchema = z.object({
    user: z.string(),
    review: z.string(),
    rating: z.number(),
});

export type Reviewtype = z.infer<typeof ReviewSchema>;