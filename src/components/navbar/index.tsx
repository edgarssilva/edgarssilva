import React from 'react'
import { ModeToggle } from '../theme-switcher'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import Link from 'next/link'
import { Links } from './Links'

export const Navbar = (props: {}) => {
    const nav = [{ href: "/", text: "Home" }, { href: "/blog/test", text: "Blog" }, { href: "/portfolio", text: "Portfolio" }, { href: "/contact", text: "Contact" }];

    return (
        <div className='relative py-4 w-full flex justify-between items-center gap-4'>
            <Links urls={nav} />
            <div className='absolute right-0 flex flex-row gap-2'>
                <a href="https://linkedin.com/in/edgarssilva" target='_blank'>
                    <Button variant="ghost" size="icon">
                        <LinkedinIcon className='h-5 w-5' />
                    </Button>
                </a>
                <a href="https://github.com/edgarssilva" target='_blank'>
                    <Button variant="ghost" size="icon">
                        <GithubIcon className='h-5 w-5' />
                    </Button>
                </a>
                <ModeToggle />
            </div>
        </div>
    )
}
