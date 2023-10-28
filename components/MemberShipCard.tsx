
import { prompt } from "@styles/fonts"
type props = {
  Name: string,
  Benifits: string[],
  Price: number
}
const Membershipcard = ({ Name, Benifits, Price, }: props) => {
  const benifits = Benifits.map((benifit, index) => {
    return <li key={index}>{benifit}</li>
  })
  return (
    <div >
      <div className=" relative border border-neutral-400 rounded-md h-full">
        <div className="hover:bg-blue-600 hover:text-white hover:rounded-t-md">
          <br className="" />
          <div className={`${prompt.className} text-[18px]`}>{Name}</div>
        </div>
        <div className=' border-t border-neutral-400 drop-shadow-md h-full px-10 py-20'>
          <ul className="list-disc">
            {benifits}
            <li className="">Price {Price} per month</li>
          </ul>
          <button
            className="bg-red-600 text-white font-bold px-5 py-2 rounded-md absolute  bottom-14 left-auto right-auto active:bg-red-900"
          >
            subscribe
          </button>
        </div>
      </div>
    </div>

  )
}

export default Membershipcard;