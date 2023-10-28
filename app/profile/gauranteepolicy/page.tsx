import React from 'react';

const Page = () => {
    return (
        <div className="mt-5 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto py-10">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Return Policy: Dry Leaves Guarantee</h2>
                    <p className="text-gray-600 mb-6">At kvpproduct, we are committed to providing you with the freshest and highest-quality products. We understand that sometimes things may not go as planned, and that's why we've designed a hassle-free return policy to ensure your satisfaction.</p>

                    <div className="bg-yellow-100 p-6 rounded-md mb-6">
                        <h3 className="text-xl font-semibold mb-3">Our Dry Leaves Guarantee</h3>
                        <p className="text-gray-700">We take great pride in the quality of our products, especially when it comes to fresh produce such as leaves. We want you to feel confident in your purchase. That's why we offer the Dry Leaves Guarantee – if the leaves you receive are completely dry upon arrival, you are eligible to return the product.</p>
                    </div>

                    <div className="bg-blue-100 p-6 rounded-md mb-6">
                        <h3 className="text-xl font-semibold mb-3">How It Works</h3>
                        <ol className="list-decimal list-inside text-gray-700">
                            <li>Contact Us: Reach out to our customer support team within 24 hours of receiving your order. You can contact us via email at <a href="mailto:customer-support@yourcompany.com" className="text-blue-500">yaswanthkosuru999@gmail.com</a> or by calling our toll-free number.</li>
                            <li>Provide Details: When you contact us, please provide your order number and a clear description of the issue. We may ask you to provide photographic evidence of the dry leaves to assist us in processing your return.</li>
                            <li>Return Authorization: Once we verify the issue, we will provide you with a return authorization and instructions on how to send the product back to us.</li>
                            <li>Return and Refund: Upon receiving the returned product and confirming the dry leaves, we will process your refund. You can expect the refund to be issued to your original payment method within 6 business days after the return is processed.</li>
                        </ol>
                    </div>

                    <div className="bg-green-100 p-6 rounded-md">
                        <h3 className="text-xl font-semibold mb-3">Terms and Conditions</h3>
                        <ol className="list-decimal list-inside text-gray-700">
                            <li>The Dry Leaves Guarantee applies only to products that are found to be completely dry upon arrival.</li>
                            <li>The guarantee is valid for 30 MINUTES from the date of delivery.</li>
                            <li>Photographic evidence of the dry leaves may be required to process the return.</li>
                            <li>Refunds will be issued in accordance with our standard refund policy.</li>
                        </ol>
                    </div>

                    <p className="mt-6 text-gray-600">Your Satisfaction is Our Priority<br />At kvpproduct, we value your trust and satisfaction above all else. Our Dry Leaves Guarantee is just one way we show our commitment to delivering the best products to you. If you have any questions or concerns, please don't hesitate to reach out to our customer support team. We're here to make sure you have a positive experience with every purchase.</p>
                </div>
            </div>
        </div>
    );
}

export default Page;
