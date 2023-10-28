
import Nav from "@components/HeaderFooter/Desktop/DesktopNav"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div className="bg-gray-200 min-w-[350px]">
            {children}
        </div>

    )
}
