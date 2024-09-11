import React from 'react';
import Image from 'next/image';

import working from "~/assets/working.svg";

export const metadata = {
    title: "Oops! Under construction",
    description: "This page is under construction.",
};

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center flex-1">
            <Image
                src={working}
                alt="Under Construction"
                className="mb-2"
                style={{ height: "calc(100vh - 290px)", minHeight: "250px" }}
            />
            <h1 className="text-2xl font-bold text-center text-pretty">Sorry, I'm still doing some work on this page</h1>
            <p className="text-sm mt-2 text-center text-muted-foreground">Thank you for being patient. This page should be ready shortly.</p>
        </div>);
}
