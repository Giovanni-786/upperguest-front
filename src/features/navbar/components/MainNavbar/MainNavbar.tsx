import ProfileIcon from '@/components/ProfileIcon/ProfileIcon'
import SearchBar from '@/components/SearchBar/SearchBar'
import {} from '@/components/ui/alert-dialog'
import { SidebarTrigger } from '@/components/ui/sidebar'

function MainNavbar() {
  return (
    <>
      <nav className="flex h-[64px] w-full items-center justify-around rounded-none border-[#cacaca] border-b-1 border-solid">
        <div className="ml-24 flex flex-row items-center justify-center">
          <SidebarTrigger />
          <SearchBar />
        </div>
        <div>
          <ProfileIcon />
        </div>
      </nav>
    </>
  )
}

export default MainNavbar
