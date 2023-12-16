
import Nav from "@components/HeaderFooter/Desktop/DesktopNav"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div className="m:w-3/4 mx-auto">

            <Nav />
            {children}
        </div>

    )
}
