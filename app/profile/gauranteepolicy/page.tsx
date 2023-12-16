import React from 'react';

const Page = () => {
    return (
        <div className="mt-5  min-h-screen flex items-center justify-center">
            <div className="container mx-auto py-10">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4"> Dry Leaves Guarantee</h2>
                    <p className="text-gray-600 mb-6">At kvpproduct, we are committed to providing you with the freshest and highest-quality products. We understand that sometimes things may not go as planned, and that's why we've designed a Feed Back policy to ensure your satisfaction.
                        We take great pride in the quality of our products, especially when it comes to fresh produce</p>

                    <div className="bg-yellow-100 p-6 rounded-md mb-6">
                        <h3 className="text-xl font-semibold mb-3">Why Dry Leaves Guarantee</h3>
                        <p className="text-gray-700">  We want you to feel confident in your purchase. That's why we offer the Dry Leaves Guarantee – if the leaves or product itself you receive are completely dry upon arrival, you are eligible to return the product.</p>
                    </div>

                    <div className="bg-blue-100 p-6 rounded-md mb-6">
                        <h3 className="text-xl font-semibold mb-3">Frequently asked questions</h3>
                        <p>1.How do we reach you?</p>

                        <div className='ml-4 m:ml-10'>
                            Reach out to our customer support team within 3 days of your order if any problem. You can contact us via email at <a href="mailto:yaswanthkosuru999@gmail.com" className="text-blue-500">yaswanthkosuru999@gmail.com</a> or by calling our numbers +91 9866346516.
                        </div>

                        <p>2.Did your website accept return? </p>
                        <div className='ml-4 m:ml-10'>
                            Due to the nature and freshness of the product we commited to give we didnt accept returns
                        </div>
                    </div>


                    <p className="mt-6 text-gray-600">Your Satisfaction is Our Priority<br />At kvpproduct, we value your trust and satisfaction above all else. Our Dry Leaves Guarantee is just one way we show our commitment to delivering the best products to you. If you have any questions or concerns, please don't hesitate to reach out to our customer support team. We're here to make sure you have a positive experience with every purchase.</p>
                </div>
            </div>
        </div>
    );
}

export default Page;
