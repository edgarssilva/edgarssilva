import React from 'react'
import { ModeToggle } from './theme-switcher'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

export const Navbar = (props: {}) => {
    return (
        <nav className='relative py-6 w-full flex justify-center items-center gap-4'>
            <h1 className='absolute left-0 text-xl font-semibold'>Edgar Silva</h1>
            <ul className="flex flex-row gap-4 items-center ">
                <li className='text-sm text-muted-foreground hover:text-foreground cursor-pointer'><Link href="/">Home</Link></li>
                <li className='text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer'><Link href="/blog/test">Blog</Link></li>
                <li className='text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer'><a>Portfolio</a></li>
                <li className='text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer'><a>Contact</a></li>
            </ul>
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
        </nav>
    )
}
