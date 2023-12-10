
import '@styles/globals.css';
import Reduxprovider from '@components/Providers/reduxprovider';
import Authprovider from '@components/Providers/Authprovider';
import React from 'react';
import { getServerSession } from "next-auth/next"
import { handler } from '@app/api/auth/[...nextauth]/route';
import type { Session } from "next-auth"
import MobileNav from '@components/HeaderFooter/Mobile/MobileNav';
import Nav from '@components/HeaderFooter/Desktop/DesktopNav';
import { headers } from "next/headers";

export const metadata = {
  title: 'vegie',
  description: 'vegetables selling app',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session: Session = await getServerSession(handler) as Session;

  const headersList = headers();
  const activePath = headersList.get("x-url");
  console.log(activePath, headersList, 'activePath');

  const hidenav = activePath.split('/').includes('search');



  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <head>
        <link rel='icon' href='/applogo.png' />
      </head>


      <body className='m:w-3/4 mx-auto pb-20 m:pb-0'>

        <Authprovider session={session}>
          <Reduxprovider >
            <Nav />
            <MobileNav />
            {children}
          </Reduxprovider>
        </Authprovider>
      </body>
    </html>
  )
}
