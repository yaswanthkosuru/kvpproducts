import { AxiosResponse } from "axios";

import { z } from "zod";
export const AddCartItemApischema = z.object(
    {
        CartItems: z.record(z.string(), z.number()),
        msg: z.string().optional(),
    }
);
export type AddCartItemApiType = AxiosResponse<z.infer<typeof AddCartItemApischema>>;
