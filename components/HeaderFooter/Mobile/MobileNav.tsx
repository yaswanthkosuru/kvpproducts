'use client'

import Navcart from './Cart';
import Link from "next/link";
import Image from "next/image";
import searchicon from '@public/assets/search.svg'
import { usePathname } from 'next/navigation';
import Profile_component from '@components/HeaderFooter/Mobile/Profile';
import Home_component from '@components/HeaderFooter/Mobile/Home';
import { GetSessionData } from '@utils/GetClientSession';

const MobileNav = () => {
    const { session, status } = GetSessionData();
    const pathname = usePathname();

    if (pathname === '/search') {
        return <></>
    }

    return (

        <div className="block m:hidden ">
            <div className="fixed bottom-0 left-0 right-0 z-50 ">
                <div
                    className="flex flex-row min-w-[320px] text-[12px] border-t  justify-between bg-white px-8 pb-2">
                    <Home_component />
                    <Profile_component />
                    <Navcart />


                </div>
            </div>
            <div className='relative top-0'>
                <Link
                    href='/search'
                >

                    <div className="w-full py-2 border bg-white rounded-md flex flex-row gap-2 justify-between items-center">
                        <Image
                            src={searchicon}
                            width={36}
                            height={36}
                            className='h-[28px] w-[30px]'
                            alt='searchicon'
                        />
                        <input
                            placeholder="search products"
                            readOnly
                            className="w-full focus:outline-none bg-white text-green-600 cursor-pointer   placeholder:font-bold">
                        </input>
                        {
                            (status === 'unauthenticated') && (
                                <div>
                                    <Link
                                        href='/loginpage'
                                        className="bg-green-700 py-[2px] px-2 text-white rounded-sm font-medium" >
                                        LOGIN
                                    </Link>
                                </div>
                            )
                        }
                        {(status === 'authenticated' && session && typeof session.user?.image === 'string') &&
                            <Image
                                src={session.user.image}
                                width={40}
                                height={40}
                                className='border  rounded-full cursor-pointer '
                                alt='profile'

                            />
                        }
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default MobileNav;