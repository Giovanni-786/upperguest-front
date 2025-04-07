import { Input } from '../ui/input'
import { Search } from 'lucide-react'
function SearchBar() {
  return (
    <>
      <div className="relative w-full">
        <Search
          className="absolute top-2 right-5"
          width={15}
          color="#3E3D3D61"
        />
        <Input
          type="search"
          placeholder="Pesquisar"
          className=" ml-3 h-[40px] w-[623px] rounded-2xl border-[#C6C6C6] border-[1px] bg-white placeholder:text-[#3E3D3D61]"
        />
      </div>
    </>
  )
}
export default SearchBar
