
import Nav from "@components/HeaderFooter/Desktop/DesktopNav"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div>


            {children}
        </div>

    )
}
