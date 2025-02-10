import React from 'react'
import { SidebarInset, SidebarProvider } from './ui/sidebar'
import { AppSidebar } from './app-sidebar'
import Navbar from './navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Navbar />
                <main className='p-5'>{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export {Layout};
