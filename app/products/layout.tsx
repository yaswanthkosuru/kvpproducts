import '@styles/globals.css';
import Nav from '@components/HeaderFooter/Desktop/DesktopNav';
import { ReactNode } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {

    return (
        <div className='mt-4'>



            {children}

        </div>



    )
}
