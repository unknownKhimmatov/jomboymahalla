import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./UsersAdd.css"
import Profil from '../Profil/DashProfil'
export default function UsersAdd() {

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
                        <NavLink to='/Home'>
                            <li >
                                <i class='bx bx-home'></i> <span style={{ display: show !== true ? "block" : "none" }} >Bosh sahifa</span>
                            </li>
                        </NavLink>
                        <NavLink to='/Statistika'>
                            <li>
                                <i class='bx bx-bar-chart-alt-2'  ></i> <span style={{ display: show !== true ? "block" : "none" }}>Statistika</span>
                            </li>
                        </NavLink>
                        <NavLink to='/UsersAdd'>
                            <li style={{ backgroundColor: "#fff", color: "#000" }}>
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

            <div className="registr-container margin" style={{ width: show !== true ? "80%" : "95%" }}>
                <div className="registr-item1">
                    <div className="registr-item">
                        <div className="registr-box ">
                            <input type="text" placeholder="Ismingiz" />
                        </div>
                        <div className="registr-box ">
                            <input type="text" placeholder="Familiyangiz" />
                        </div>
                        <div className="registr-box">
                            <input type="text" placeholder="Ochistva" />
                        </div>
                        <div className="registr-box ">
                            <input type="text" placeholder="seriya raqami" />
                        </div>
                        <div className="registr-box ">
                            <label htmlFor="pass" className='pass'>
                                Passport rasmlar
                                <input type="file" id='pass' />
                            </label>
                        </div>
                        <div className="registr-box">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="registr-radio">
                        <div className="radio-box">
                            <strong htmlFor="temir">Temir daftarda turadimi</strong>
                            <label htmlFor="ha1">Ha</label>
                            <input type="radio" id="ha1" name="temir" /> <br />

                            <label htmlFor="yuq1">Yuq</label>
                            <input type="radio" id="yuq1" name="temir" />
                        </div>
                        <div className="radio-box">
                            <strong htmlFor="temir">Hozir cheteldami</strong>
                            <label htmlFor="ha2">Ha</label>
                            <input type="radio" id="ha2" name="chet" /> <br />

                            <label htmlFor="yuq2">Yuq</label>
                            <input type="radio" id="yuq2" name="chet" />
                        </div>
                        <div className="radio-box">
                            <strong htmlFor="nogiron">Nogironli bormi</strong>
                            <label htmlFor="ha3">Ha</label>
                            <input type="radio" id="ha3" name="nogiron" /> <br />

                            <label htmlFor="yuq3">Yuq</label>
                            <input type="radio" id="yuq3" name="nogiron" />
                        </div>
                        <div className="radio-box">
                            <strong htmlFor="temir">Ayollar daftarida turadimi</strong>
                            <label htmlFor="ha4">Ha</label>
                            <input type="radio" id="ha4" name="ayollar" /> <br />

                            <label htmlFor="yuq4">Yuq</label>
                            <input type="radio" id="yuq4" name="ayollar" />
                        </div>
                    </div>
                </div>
            </div>
            <Profil />
        </div>
    )
}
