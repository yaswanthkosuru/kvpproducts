import { Reviewaction, Reviewstate } from "@CustomTypes/ReduxType";
import { getreviews, selectallreviews, selectreviewsstatus } from "@app/redux/feautres/Reviews/Reviewslice";
import Fivestar from "@components/productspage/FiveStar";
import { roboto, robotoslab } from "@styles/fonts";
import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loadingwithspin from "./Loading";
import { AppDispatch } from "@app/redux/store";
import { useParams } from "next/navigation";
import Noreviews from "./Noreviews";

const initialState: Reviewstate = {
    reviewstatus: 'idle'
}
function reducer(state: Reviewstate, action: Reviewaction): Reviewstate {
    switch (action.type) {
        case 'setreviewstatus':
            state.reviewstatus = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}
const ReviewComponent = () => {
    const reviews = useSelector(selectallreviews);
    const reviewstatus = useSelector(selectreviewsstatus);
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchRedux = useDispatch<AppDispatch>();
    const { product_id } = useParams();

    const id = product_id as string;
    useEffect(() => {
        dispatch({ type: 'setreviewstatus', payload: reviewstatus });
    }, [reviewstatus])
    useEffect(() => {
        dispatchRedux(getreviews({ product_id: product_id as string }));
    }, []);
    console.log(state.reviewstatus, 'reviewstatus');

    const styledreviews = reviews?.map((review, index) => {
        return <div
            key={index}
            className={`${roboto.className} ${robotoslab.className} `}>
            <div className="flex items-center gap-2">
                <div className=" flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                    <svg fill="gray" height="14px" width="14px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 460.002 460.002" >
                        <g>
                            <g>
                                <g>
                                    <path d="M427.137,0H32.865C14.743,0,0,14.743,0,32.865v394.272c0,18.151,14.714,32.865,32.865,32.865h394.272
				c18.151,0,32.865-14.714,32.865-32.865V32.865C460.002,14.743,445.259,0,427.137,0z M430.002,427.137
				c0,1.58-1.285,2.865-2.865,2.865H32.865c-1.582,0-2.865-1.283-2.865-2.865V32.865C30,31.283,31.283,30,32.865,30h394.272
				c1.58,0,2.865,1.285,2.865,2.865V427.137z"/>
                                    <path d="M292.33,201.531c-2.754-4.323-7.524-6.939-12.65-6.939c-5.126,0-9.896,2.617-12.65,6.939l-72.346,113.536l-37.029-58.111
				c-2.754-4.322-7.524-6.939-12.65-6.939s-9.896,2.617-12.65,6.939L55.263,377.94c-2.943,4.618-3.135,10.473-0.501,15.275
				c2.634,4.801,7.675,7.786,13.151,7.786h324.176c5.477,0,10.518-2.984,13.151-7.786s2.442-10.657-0.501-15.275L292.33,201.531z
				 M95.258,371.001l49.747-78.07l37.029,58.11c2.754,4.323,7.524,6.939,12.65,6.939c5.126,0,9.896-2.617,12.65-6.939
				l72.346-113.536l85.064,133.496H95.258z"/>
                                    <path d="M139.001,198.001c39.149,0,71-31.851,71-71c0-39.149-31.851-71-71-71c-39.149,0-71,31.851-71,71
				C68.001,166.15,99.852,198.001,139.001,198.001z M139.001,86.001c22.607,0,41,18.393,41,41s-18.393,41-41,41s-41-18.393-41-41
				S116.394,86.001,139.001,86.001z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <span className='text-md font-bold text-gray-700'>
                    {review.username}
                </span>
            </div>

            <span className='w-20'>
            </span>
            <span className='text-gray-800'>
                {review.review}
            </span>

            <hr className="h-[2px] bg-slate-200" />
        </div>
    })
    if (state.reviewstatus === 'Loading') {
        return <Loadingwithspin />;
    }
    else if (reviews?.length == 0) {
        return (
            <Noreviews />
        )
    }
    return <div>
        {styledreviews}
    </div>
}
export default ReviewComponent;