import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { BsSearch } from 'react-icons/bs'
import { FaCoins } from 'react-icons/fa'
import { BsBell } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'
const Navbar = () => {
    return (
        <nav>
            <div className="head">
                <img src={logo} alt="logo" />
                <h3>Zintir</h3>
            </div>
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='/'>Feed</a>
                    </li>
                    <li>
                        <a href='/'>Dashboard</a>
                    </li>
                    <li>
                        <a href='/'>Lookup</a>
                    </li>
                    <li>
                        <a href='/'>List</a>
                    </li>
                    <li>
                        <a href='/'>Team</a>
                    </li>
                </ul>
            </div>

            <div className="searchFormWrapper">
                <input
                    type="text"
                    placeholder="Search Any Keyword..."

                />
                <button>
                    {<BsSearch />}
                </button>
            </div>

            <div className="creditsWrapper">
                <div className="credits">
                <FaCoins />
                <h4>Credits</h4>
                </div>
                <div className="creditsBar"></div>
            </div>

            <div className="rest">
                <BsBell className='bell'/>
                <h4>BansilalBrata</h4>
                <AiFillCaretDown className='downArrow'/>
                <img src={profile} alt="User Profile" />
                <button >Upgrade</button>


            </div>
        </nav>
    )
}

export default Navbar