
import { z } from 'zod';
const Order_Schema = z.object(
    {
        _id: z.string(),
        product_id: z.string(),
        details: z.object(
            {
                dateandtime: z.date(),
                quantity: z.number(),
                order_type: z.enum(['card', 'cod']),
                orderstatus: z.enum(['pending', 'paid', 'shipped', 'complete']),
                address_id: z.string(),
            }
        )

    }
)
export type OrderType = z.infer<typeof Order_Schema>;