import { User } from 'lucide-react'

function ProfileIcon() {
  return (
    <div className="flex h-9 w-[154px] items-center justify-center gap-2.5 rounded-3xl bg-[#D9D9D982]">
      <User width={20} height={20} />
      <span className="text-black text-sm">Voe Upper</span>
    </div>
  )
}
export default ProfileIcon
