import { Outlet } from "react-router"
import Navbar from "./features/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
