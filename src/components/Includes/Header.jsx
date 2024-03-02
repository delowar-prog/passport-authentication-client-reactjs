import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className="bg-lime-200 nav-section">
        <div>Logo</div>
        <ul className="text-lime-800 flex gap-10 justify-end font-bold">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Blogs</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>
              <Link to={'/login'}>Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header