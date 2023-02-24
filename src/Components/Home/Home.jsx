import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DashProfil from '../Profil/DashProfil'
import Aholi from './Aholi'
import MahallaHaqida from './MahallaHaqida'
import Millat from './Millat'


export default function Home() {

    const [show, setShow] = useState(false)

    const HandlerClick = () => {
        setShow(!show)
        console.log(show);
    }

    return (
        <div className="home">
            <div className='Dashboard' style={{ width: show !== true ? "20%" : "5%" }}>
                <div className="item-dashboard">
                    <div className="top-logo">
                        <img src="./img/Mahalla.png" alt="" />
                    </div>
                    <ul>
                        <li style={{ backgroundColor: "#fff", color: "#000" }}>
                            <i class='bx bx-home' ></i> <span style={{ display: show !== true ? "block" : "none" }} >Bosh sahifa</span>
                        </li>
                        <NavLink to='/Statistika'>
                            <li>
                                <i class='bx bx-bar-chart-alt-2'  ></i> <span style={{ display: show !== true ? "block" : "none" }}>Statistika</span>
                            </li>
                        </NavLink>
                        <NavLink to='/UsersAdd'>
                            <li>
                                <i class='bx bx-bar-chart-alt-2'  ></i> <span style={{ display: show !== true ? "block" : "none" }}>Ro`yxatga Qo`shish</span>
                            </li>
                        </NavLink>
                        <NavLink to='/Yoshlar'>
                            <li>
                                <i class='bx bx-list-ol'  ></i> <span style={{ display: show !== true ? "block" : "none" }}>Umumiy ro`yxat</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="dashboard-arrow" onClick={HandlerClick} >
                    <i class='bx bx-chevron-left' style={{ display: show !== true ? "block" : "none" }} ></i>
                    <i class='bx bx-chevron-right ' style={{ display: show !== true ? "none" : "block" }}></i>
                </div>
            </div>
            <div className="main-content" style={{ width: show !== true ? "80%" : "95%" }}>
                <div className="item-main-content">
                    <div className="left-mahalla">
                        <MahallaHaqida />
                        <Aholi />
                    </div>
                    <div className="rigth-mahalla">
                        <Millat />
                    </div>
                </div>
            </div>
            <DashProfil />
        </div>
    )
}
