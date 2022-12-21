import React from 'react'
import { BrowserRouter,Routes, Route} from "react-router-dom"

import HomePage from './Homepage'
import Crypto from './Crypto'
import Calculator from './calculator'


function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={
                    <HomePage />
                } />

                <Route path="/Crypto" element={
                    <Crypto />
                } />

                <Route path="/calculator" element={
                    <Calculator />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter