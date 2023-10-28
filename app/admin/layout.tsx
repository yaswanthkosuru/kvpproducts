
import '@styles/admin.css';
import DesktopNav from '@components/HeaderFooter/Desktop/DesktopNav';

export default function RootLayout({ children }: { children: JSX.Element }) {

    return (
        <div>
            <DesktopNav />
            {/* desktop */}
            {/* <div className='hidden m:block'>

                <div className={`grid grid-flow-col-dense mt-4  justify-start ${poppins.className} ${ptserif.className}`}>
                    <div className='h-screen flex w-52 flex-col gap-2  rounded-md bg-indigo-50 '>
                        <Link
                            className='btn-primary'
                            href='/admin/create_product'
                        >create your product</Link>
                        <Link
                            className='btn-primary  '
                            href='/admin/update_product'
                        >
                            update your product
                        </Link>
                        <Link
                            className=' btn-primary '
                            href='/admin/receivedorders'
                        >
                            Received_orders
                        </Link>


                    </div>
                    <div className=''>
                        {children}
                    </div>

                </div >

            </div> */}
            {children}
            {/* mobile */}
            {/* <div className='block m:hidden font-bold'>
                please switch to desktop mode

            </div> */}

        </div>
    )
}
