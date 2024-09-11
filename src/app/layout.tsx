import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { Navbar } from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";
import { Footer } from "~/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: "Edgar Silva - Software Engineer",
    description: "Personal website of Edgar Silva, a software engineer based in Portugal.",
    //  icons: [{ rel: "icon", url: "./favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${inter.variable}`}>
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
                <SpeedInsights />
                <Analytics />
            </body>
            <noscript dangerouslySetInnerHTML={{ __html: '<style>.motion{ opacity: 1 !important; transform: translateY(0px) !important; filter: blur(0px) !important;}</style>' }} />
        </html >
    );
}
