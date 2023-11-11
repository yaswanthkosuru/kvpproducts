import { selectallreviews } from "@app/redux/feautres/Reviews/Reviewslice";
import Fivestar from "@components/Buttons/FiveStar";
import { roboto, robotoslab } from "@styles/fonts";
import { useSelector } from "react-redux";

const ReviewComponent = () => {
    const reviews = useSelector(selectallreviews);
    const styledreviews = reviews?.map((review) => {
        return <div className={`${roboto.className} ${robotoslab.className}`}>
            <span className='text-md font-medium'>
                {review.username}
            </span>
            <br />
            <span className='w-20'>
                <Fivestar rating={review.rating} isreview={true} />
            </span>
            <span className='text-gray-700'>
                {review.review}
            </span>

            <hr className="h-2 bg-gray-100" />
        </div>
    })
    return <div>
        {styledreviews}
    </div>
}
export default ReviewComponent;