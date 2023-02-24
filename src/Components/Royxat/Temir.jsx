import React, { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { RoyxatData } from '../FakeData'
import { BsSearch } from "react-icons/bs";
import { HiFilter } from "react-icons/hi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import DashProfil from '../Profil/DashProfil';

function Temir() {

    const [show, setShow] = useState(false)

    const HandlerClick = () => {
        setShow(!show)
        console.log(show);
    }

    const [fil, setFil] = useState(false)
    const FillterModal = () => {
        setFil(!fil)
    }

    return (
        <>

            <div className='home'>
                <div className='Dashboard' style={{ width: show !== true ? "20%" : "5%" }}>
                    <div className="item-dashboard">
                        <div className="top-logo">
                            <img src="./img/Mahalla.png" alt="" />
                        </div>
                        <ul>
                            <NavLink to='/Home'>
                                <li >
                                    <i class='bx bx-home' ></i> <span style={{ display: show !== true ? "block" : "none" }} >Bosh sahifa</span>
                                </li>
                            </NavLink>
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
                                <li style={{ backgroundColor: "#fff", color: "#000" }}>
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



                {/* Temir daftarga kirtilgan odamlar  */}
                <div className="center-container margin" style={{ width: show !== true ? "80%" : "95%" }}>
                    <div className="center-item">
                        <div className="input">
                            <input type="search" placeholder="Search"></input>
                            <BsSearch className="icons_search" />
                        </div>
                        <div className="center-navbar flex">
                            <div className="center-nav flex">
                                <NavLink to='/Yoshlar'>
                                    <p >Yoshlar daftari</p>
                                </NavLink>
                                <NavLink to='/Ayollar'>
                                    <p >Ayollar daftari</p>
                                </NavLink>
                                <p style={{ borderBottom: "1px solid black" }}>Temir daftar</p>
                                <NavLink to='/Migrant'>
                                    <p>Migrant</p>
                                </NavLink>
                            </div>
                            <div className="center-button flex" onClick={FillterModal}  >
                                <button className="filter_btn flex filter1">
                                    Filter
                                    <HiFilter className="btn_icon filter" />
                                </button>
                            </div>
                            <div className="filter-container" style={{ display: fil !== true ? " none" : " block" }}>
                                <div className="filter-box">
                                    <p>0-14 yoshgacha</p>
                                    <p>14-30 yoshgacha</p>
                                    <p>30 yoshdan yuqori</p>
                                </div>
                            </div>
                        </div>
                        <div className="head-container">
                            <div className="head-item flex">
                                <div className="head-start flex">
                                    <MdOutlineFormatListNumbered />
                                    <div className="tayoq"></div>
                                    <p>FIO</p>
                                </div>
                                <div className="head-finish flex">
                                    <div className="tayoq"></div>
                                    <p>Manzil</p>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div className="yoshlar-container">
                            <div className="yoshlar-item1">
                                {RoyxatData.map((item, index) => {
                                    return (
                                        <div className="yoshlar-box flex">
                                            <div className="yoshlar-start flex">
                                                <strong className="id">{item.id}</strong>
                                                <div className="tayoq tayoqs"></div>
                                                <p className="margin-left">{item.familiya} </p>
                                                <p>{item.name1} </p>
                                                <p>{item.ochistva} </p>
                                            </div>
                                            <div className="yoshlar-finish flex">
                                                <div className="tayoq"></div>
                                                <p>{item.mahalla} </p>
                                                <p>{item.qishloq} </p>
                                                <p>{item.uynomer} </p>
                                            </div>
                                            <div className="none"></div>
                                            <div></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>




                    </div>
                </div>

                <DashProfil />

            </div>

        </>
    )
}

export default Temir







