import React from 'react'
import { SidebarInset, SidebarProvider } from './ui/sidebar'
import { AppSidebar } from './app-sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <main>{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export {Layout};
