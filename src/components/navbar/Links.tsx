'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
    href: string;
    text: string;
};

export function Links(props: { urls: LinkProps[] }) {
    const pathname = usePathname();

    return (
        <nav className="flex gap-4">
            {props.urls.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs sm:text-sm font-semibold hover:text-foreground hover:underline underline-offset-2 ${pathname == link.href ? "text-foreground" : "text-muted-foreground"}`} aria-current={pathname === link.href ? "page" : undefined}>
                    {link.text}
                </Link>
            ))}
        </nav>
    );
}
