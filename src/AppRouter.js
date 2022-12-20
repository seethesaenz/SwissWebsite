import React from 'react'
import { BrowserRouter,Routes, Route} from "react-router-dom"

import HomePage from './Homepage'
import Crypto from './Crypto'
import App from './App'

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
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter