'use client'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { inter, ptserif, roboto, ubuntu } from "@styles/fonts";
import Arrow from '@components/Buttons/ArrowComponent'
import '@styles/globals.css';
import { BuiltInProviderType } from "next-auth/providers";
import logo from '@public/logo.png'
import Navcart from "../Mobile/Cart";

const Nav = () => {
  const router = useRouter()
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>>();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    async function getprov() {
      const res: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null = await getProviders();
      if (res) {
        setProviders(res);
      }

    }
    getprov();
  }, []);

  const handlesignoutclick = async () => {
    signOut();
  }

  if (!providers) {
    return (
      <section>
        {/* navbar */}
        <div className="animate-pulse">
          <div className="sm:flex hidden flex-row items-center justify-between rounded-xl  animate-pulse">
            <div className="w-[60px] h-[60px] rounded-md bg-gray-200"></div>
            <div className="w-60 bg-gray-200 h-[60px] rounded-md"></div>
            <div className="w-52 bg-gray-200 h-[60px] rounded-md"></div>
            <div className="w-10 bg-gray-200 h-10 rounded-full"></div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <div>
      {/* desktop navigation */}
      <div className="hidden m:block ">
        <nav className='flex flex-row  justify-between items-center rounded-xl h-14 mt-4 mx-5'>
          <Link
            href='/'
            className="hover:text-slate-900 active:text-blue-900">
            <Image src={logo} width={35} height={30} alt='none'></Image>
          </Link>
          <Link
            href='/search'
            className=" cursor-pointer">
            <input
              placeholder='search in Lushly...'
              readOnly
              className='placeholder:text-slate-400 bg-white border border-gray-400 rounded-md focus:outline-none cursor-pointer w-60 pl-4 h-8'
            />
          </Link>

          <div
            className=
            {`${ubuntu.className} `}>
            <Navcart />
          </div>
          {session?.user ? (
            <div className='relative flex flex-row items-center justify-center'>
              {session?.user.image &&
                <Image
                  src={session?.user?.image}
                  width={40}
                  height={40}
                  className='border  rounded-full cursor-pointer '
                  alt='profile'
                  onClick={() => setToggleDropdown((prev) => !prev)}
                />
              }
              <Arrow setToggleDropdown={setToggleDropdown} />

              {toggleDropdown && (
                <div className='rounded-md absolute right-0 top-10 flex flex-col place-items-start bg-white shadow-md gap-2 text-xl w-44 h-auto z-50'>
                  <Link href='/profile'
                    className='hover:bg-slate-300 hover:rounded-t-md w-full p-2'
                  >
                    Profile
                  </Link>

                  <Link
                    className="hover:bg-slate-300 w-full active:text-blue-900 p-2"
                    href='/cart'
                  >
                    My cart
                  </Link>
                  <div
                    onClick={handlesignoutclick}
                    className='hover:bg-gray-300 w-full rounded-b-md cursor-pointer active:text-blue-900 p-2'>
                    SignOut
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {providers ? (
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className={`bg-blue-600 font-semibold text-[15px] text-white py-2 pl-4 pr-3 shadow-sm rounded-md transition-colors duration-500 border
                   border-slate-300 active:bg-blue-900 ${inter.className} `
                    }>
                    LOG IN
                  </button>
                ))) : (
                <button
                  className={`bg-blue-200 font-semibold text-[15px] text-white py-2 pl-4 pr-3 shadow-sm rounded-md transition-colors duration-500 border ${inter.className} cursor-wait `
                  }>
                  LOG IN
                </button>
              )}
            </div>)
          }
        </nav>
      </div>
      {/* mobile navigation */}

    </div>

  );
};

export default Nav;
