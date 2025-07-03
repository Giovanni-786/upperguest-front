import { House, Home, Users, ChartLine, UserRoundPlus } from 'lucide-react'
import UpperLogo from '@/assets/upperLogoPng.png'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Início',
    url: '#',
    icon: Home,
  },
  {
    title: 'Cadastro',
    url: '#',
    icon: UserRoundPlus,
  },
  {
    title: 'Cadastrados',
    url: '#',
    icon: Users,
  },
  {
    title: 'Células',
    url: '#',
    icon: House,
  },
  {
    title: 'Relatórios',
    url: '#',
    icon: ChartLine,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex h-16 w-full items-center justify-center rounded-none border-[#cacaca] border-b-1 border-solid">
            <img
              src={UpperLogo}
              alt="Logo Upper"
              className="h-[44px] w-[76px]"
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-7 p-5">
              <p className="pl-1.5">MENU</p>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
