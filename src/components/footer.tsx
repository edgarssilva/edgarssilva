import React from 'react';
import { Button } from './ui/button';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-8 mt-auto h-28">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-muted-foreground">
                        © 2024 Edgar Silva. All rights reserved.
                    </p>
                </div>
                <div className='shrink-0 text-muted-foreground'>
                    <a href="https://linkedin.com/in/edgarssilva" target='_blank'>
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className='h-5 w-5' />
                        </Button>
                    </a>
                    <a href="mailto:edgarasdaa10@gmail.com">
                        <Button variant="ghost" size="icon">
                            <MailIcon className='h-5 w-5' />
                        </Button>
                    </a>
                    <a href="https://github.com/edgarssilva" target='_blank'>
                        <Button variant="ghost" size="icon">
                            <GithubIcon className='h-5 w-5' />
                        </Button>
                    </a>
                </div>
            </div>
        </footer>
    );
}
