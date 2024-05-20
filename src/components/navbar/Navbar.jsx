import React,{useState} from 'react'
import "./navbar.scss"
const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <nav>
            <div className='left'>
                <a href="/" className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>estate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className='right'>
                <a href="/" className='login'>Sign in</a>
                <a href="/" className='register'>Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(!open)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar