import { ReviewType } from "@models/Review_Model"
import { useForm, SubmitHandler } from "react-hook-form"
import '@styles/globals.css'
type Inputs = Omit<ReviewType, 'username'>;

export default function RatingInputUserForm({ product_id }: { product_id: string }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form
            className="grid grid-flow-row  bg-blue-100/50 gap-4  px-2 mt-2"
            onSubmit={handleSubmit(onSubmit)}>
            <label>Add Your Review  </label>

            <input
                className=" rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-none"
                {...register("review", { required: true })}
                placeholder="i love this amazing product"
            />
            {errors.review && <span>This field is required</span>}
            <label>Add your rating  </label>
            <select
                className='py-2 text-gray-800 focus:outline-none border  border-gray-900'
                {...register('rating')}
                defaultValue={1}
            >
                {[1, 2, 3, 4, 5].map((code) => {
                    return <option key={code} value={code}>{code}</option>
                })}
            </select>

            <button className="ripple w-1/2 mx-auto" type="submit" >submit </button>
        </form>
    )
}