import { Outlet, useLocation } from "react-router-dom"
import Header from "../Includes/Header"
import Footer from "../Includes/Footer"

const Layout = () => {
  let location=useLocation();
  const noHeaderFooter=location.pathname?.includes('login')||location.pathname?.includes('register');
  return (
    <div>
        {noHeaderFooter||<Header></Header>}
        <Outlet></Outlet>
        {noHeaderFooter||<Footer></Footer>}
    </div>
  )
}

export default Layout