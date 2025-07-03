import ProfileIcon from '@/components/ProfileIcon/ProfileIcon'
import {} from '@/components/ui/alert-dialog'

function MainNavbar() {
  return (
    <>
      <nav className="flex w-full items-center justify-around ">
        <div>
          <ProfileIcon />
        </div>
      </nav>
    </>
  )
}

export default MainNavbar
