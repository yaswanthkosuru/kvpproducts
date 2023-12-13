import { ReviewType } from "@models/reviewModel"
import { useForm, SubmitHandler } from "react-hook-form"
import '@styles/globals.css'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@app/redux/store";
import { createreview } from "@app/redux/feautres/Reviews/Reviewslice";
type Inputs = {
    rating: number,
    review: string
};

export default function RatingInputUserForm({ product_id }: { product_id: string }) {
    return <div>rating form</div>
}