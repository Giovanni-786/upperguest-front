import { Outlet } from 'react-router'
// import { MainNavbar } from './features/navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar/AppSidebar'
import { MainNavbar } from './features/navbar'

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <MainNavbar />
      <Outlet />
    </SidebarProvider>
  )
}

export default App
