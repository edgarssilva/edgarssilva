import React from 'react'
import { ModeToggle } from './theme-switcher'
import { GithubIcon } from 'lucide-react'
import { Button } from './ui/button'

export const Navbar = (props: {}) => {
    return (
        <nav className='w-full flex py-2 px-16 items-center gap-4'>
            <h1 className='text-2xl font-semibold font-g'>Edgar Silva</h1>
            <ul className="flex flex-row gap-4 items-center">
                <li><a>Home</a></li>
                <li><a>Blog</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact</a></li>
            </ul>
            <div className='ml-auto flex flex-row gap-2'>
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
