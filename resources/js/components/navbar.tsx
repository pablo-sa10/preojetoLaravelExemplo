import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { NavUser } from './nav-user';
import { User } from '@/types';
import { ModeToggle } from './mode-toggle';

const user: User = {
    id: 1,
    name: "Pablo Moura",
    avatar: "https://github.com/pablo-sa10.png",
    email: "pablomoura2016@gmail.com",
}

const Navbar = () => {
    return (
        <header className='sticky z-10 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur top-0 flex shrink-0 items-center gap-2 border-b h-16 px-3'>
            <SidebarTrigger />

            <div className='ml-auto flex items-center'>
                <NavUser
                    user={user}
                    isNavbar
                    btnClassName="hover:bg-transparent focus-visible:ring-0"
                />
                <ModeToggle />
            </div>
        </header>
    )
}

export default Navbar
