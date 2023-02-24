import React from 'react'
import Main from './Components/Main'
import UsersAdd from './Components/UsersAdd/UsersAdd'
import Yoshlar from './Components/Royxat/Yoshlar'
import {
    Route, Routes
} from 'react-router-dom'
import Temir from './Components/Royxat/Temir'

import Ayollar from './Components/Royxat/Ayollar'

import Migrant from './Components/Royxat/Migrant'
// css 
import "./Components/css/login.css"
import "./Components/css/home.css"
import "../src/Components/css/statistika.css"

import Statistika from './Components/Statistika/Statistika'
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path='/*' element={<Main />} ></Route>
                    <Route path='/Home' element={<Home />} ></Route>
                    <Route path='/Statistika' element={<Statistika />} ></Route>
                    <Route path='/UsersAdd' element={<UsersAdd />} ></Route>
                    <Route path='/Yoshlar' element={<Yoshlar />} ></Route>
                    <Route path='/Ayollar' element={<Ayollar />}></Route>
                    <Route path='/Temir' element={<Temir />} ></Route>
                    <Route path='/Migrant' element={<Migrant />} ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
