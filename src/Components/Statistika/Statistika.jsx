import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Chart1 from '../Chart/Chart1'
import UmumiyUlush from '../Chart/UmumiyUlush'
import Profil from '../Profil/DashProfil'
import Ayollar from './Ayollar'
import Bolalar from './Bolalar'
export default function Statistika() {

  const [show, setShow] = useState(false)

  const HandlerClick = () => {
    setShow(!show)
    console.log(show);
  }

  return (
    <div className='statistika'>
      <div className='Dashboard' style={{ width: show !== true ? "20%" : "5%" }}>
        <div className="item-dashboard">
          <div className="top-logo">
            <img src="./img/Mahalla.png" alt="" />
          </div>
          <ul>
            <NavLink to='/Home'>
              <li >
                <i class='bx bx-home'></i> <span style={{ display: show !== true ? "block" : "none" }} >Bosh sahifa</span>
              </li>
            </NavLink>
            <NavLink to='/Statistika'>
              <li style={{ backgroundColor: "#fff", color: "#000" }}>
                <i class='bx bx-bar-chart-alt-2'></i> <span style={{ display: show !== true ? "block" : "none" }}>Statistika</span>
              </li>
            </NavLink>
            <NavLink to='/UsersAdd'>
              <li >
                <i class='bx bx-bar-chart-alt-2'  ></i> <span style={{ display: show !== true ? "block" : "none" }}>Ro`yxatga Qo`shish</span>
              </li>
            </NavLink>
            <NavLink to='/Yoshlar' >
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


      <div className="main-statistika" style={{ width: show !== true ? "80%" : "95%" }}>
        <div className="item-statistika">
          <div className="left-chart">
            <UmumiyUlush />
          </div>
          <div className="right-chart">
            <div className="erkaklar">
              <Chart1 />
            </div>
            <div className="ayollar">
              <Ayollar />
            </div>
            <div className="bolalar">
              <Bolalar />
            </div>
          </div>
        </div>
      </div>
      <Profil />
    </div>
  )
}
