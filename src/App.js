import React from "react"
import Navbar from "./components/Navbar"
import Main from './components/Main'
import data from "./data"

export default function App() {
    const jsxelements = data.map(item =>{
        return <Main 
            item={item}
        />
    })
    return (
        <div className="container">
            <Navbar />
            <section className="">
                {jsxelements}
            </section>
        </div>
    )
}

