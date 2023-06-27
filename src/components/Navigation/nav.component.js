import '../../App.css'
import React from 'react'
// /className='font-bold text-neutral-300'

const navbarModel = [
    'About Us',
    'Portolio',
    'Manga App'
]

const navbarHandler = navbarModel.map(navlink => {
    return <ul><li>{navlink}</li></ul>
})

export default function Navbar() {
    return (
        <div className='mt-3 flex flex-row space-x-2 place-content-center font-bold text-neutral-300'>
            {navbarHandler}
        </div>
    )
}