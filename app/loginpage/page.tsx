'use client';
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import loginpage from '@public/assets/landing.jpg'
import { inter, merriweather, opensans, ptserif, roboto, robotoslab, ubuntu } from "@styles/fonts";
import { BuiltInProviderType } from "next-auth/providers";
import { store } from "@app/redux/store";

import { getaddress } from "@app/redux/feautres/address/addressslice";

const Page = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>>();
    useEffect(() => {
        if (status === 'authenticated') {
            store.dispatch(getaddress());
            router.push('/products');
        }
    }, [status]);

    useEffect(() => {
        async function getprov() {
            const res = await getProviders();
            if (res) {

                setProviders(res);
            }
        }
        getprov();
    }, []);

    return (
        <div>
            {/* desktop */}
            <div className="hidden m:block">
                <div className="flex flex-row justify-center items-center min-w-[900px] ">
                    <div>
                        <Image
                            src={loginpage}
                            className="rounded-md"
                            width={600}
                            alt='login page'
                            height={600}
                            priority={true}
                        />
                    </div>
                    <div className="   ">
                        <div className={`font-extrabold text-[30px] ${roboto.className}  ${robotoslab.className}`}>
                            So, what are you waiting for?<br />
                            Let's get started!<br />
                            Log in now and nourish your
                            senses with the finest produce,<br />
                            handpicked just for you. 🍠🥦
                        </div>
                        {status === 'loading' ? (
                            <div className='bg-green-200 text-white px-3 flex cursor-wait justify-center flex-col font-medium py-2 w-52 rounded-md active:bg-blue-700'>
                                SIGN IN WITH GOOGLE
                            </div>
                        ) : (
                            <div>
                                {(status === 'unauthenticated') && providers && (
                                    Object.values(providers).map((provider) => (
                                        <button
                                            type='button'
                                            key={provider.name}
                                            onClick={async (e) => {
                                                e.preventDefault();
                                                await signIn(provider.id);
                                            }}
                                            className='bg-blue-700 text-white px-4 flex justify-center flex-col font-medium py-2 rounded-md active:bg-blue-900'
                                        >
                                            SIGN IN WITH GOOGLE
                                        </button>
                                    ))
                                )}
                                {(status === 'authenticated') && (
                                    <button
                                        type='button'
                                        onClick={() => {
                                            signOut();
                                        }
                                        } className='bg-red-500 text-white px-4 flex justify-center flex-col font-medium py-2 rounded-md active:bg-red-700'
                                    >
                                        SignOut
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* mobile*/}
            <div className="block m:hidden">
                <div className="mt-4 mx-1">
                    <div className="">
                        <div className={`text-[20px] ${robotoslab.className} ${robotoslab.className}`}>
                            So, what are you waiting for?<br />
                            Let's get started!<br />
                            Log in now and nourish your
                            senses with the finest produce,<br />
                            handpicked just for you. 🍠🥦
                        </div>
                        {status === 'loading' ? (
                            <div className='text-blue-500 cursor-wait bg-white border py-4 px-2 '>
                                SIGN IN WITH GOOGLE
                            </div>
                        ) : (
                            <div>
                                {(status === 'unauthenticated') && providers && (
                                    Object.values(providers).map((provider) => (
                                        <button
                                            type='button'
                                            key={provider.name}
                                            onClick={async (e) => {
                                                e.preventDefault();
                                                await signIn(provider.id);
                                            }}
                                            className='bg-blue-500 text-[14px]  font-bold text-white px-4 flex justify-start flex-col  py-2 items-start active:bg-blue-900'
                                        >
                                            SIGN IN WITH GOOGLE
                                        </button>
                                    ))
                                )}
                                {(status === 'authenticated') && (
                                    <button
                                        type='button'
                                        onClick={() => signOut}
                                        className='bg-red-500 text-white px-4 flex justify-center flex-col font-medium py-2 rounded-md active:bg-red-700'
                                    >
                                        SignOut
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Page;
