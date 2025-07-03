import { Outlet } from 'react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar/AppSidebar'
import { MainNavbar } from './features/navbar'

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <MainNavbar />
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default App
