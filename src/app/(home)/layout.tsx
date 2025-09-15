import Footer from "@/src/components/footer";
import { Header } from "@/src/components/header";
import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}