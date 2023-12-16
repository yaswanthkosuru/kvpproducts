
import Nav from "@components/HeaderFooter/Desktop/DesktopNav"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div className="m-1 m:w-3/4 mx-auto">

            {children}
        </div>

    )
}
