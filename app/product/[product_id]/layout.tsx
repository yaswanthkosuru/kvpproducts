
import '@styles/globals.css';
import Nav from '@components/HeaderFooter/Desktop/DesktopNav';



export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className=' relative mx-1'>
            <Nav />

            {children}

        </div>



    )
}
