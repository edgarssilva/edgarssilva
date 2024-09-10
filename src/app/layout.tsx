import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";
import { Footer } from "~/components/footer";


export const metadata: Metadata = {
    title: "Edgar Silva - Software Engineer",
    description: "Personal website of Edgar Silva, a software engineer based in Portugal.",
    //  icons: [{ rel: "icon", url: "./favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body >
                <div className="max-w-[925px] min-h-[100vh] mx-auto px-8 sm:px-6 antialiased flex flex-col">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem={true}
                        disableTransitionOnChange={true}
                    >
                        <Navbar />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </div>
            </body>
            <noscript dangerouslySetInnerHTML={{ __html: '<style>.motion{ opacity: 1 !important; transform: translateY(0px) !important; filter: blur(0px) !important;}</style>' }} />
        </html >
    );
}
