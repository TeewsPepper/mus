import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ToTopButton from "./ToTopButton"


function Layout() {
  return (
    <div>
      <Header />
      <ToTopButton/>
      < Outlet />
      <Footer />

      
    </div>
  )
}

export default Layout
