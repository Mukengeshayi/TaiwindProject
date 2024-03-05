import { headerLogo } from "../assets/images"
import {navLinks} from "../constants"
const Nav = () => {
  return (
    <header className="padding-x absolute py-1 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img
            src= {headerLogo}
            alt="logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-between items-center grap-16 max-lg:hidden">
          {navLinks.map((item)=>(
              <li key={item.label}> 
                <a href={item.href} className=" font-Montserrah leading-normal text-lg text-slate-gray">{item.label}</a> 
              </li>
          ))}
        </ul>
       
      </nav>
    </header>
    )
    
}

export default Nav