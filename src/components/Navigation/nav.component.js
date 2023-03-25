import '../../App.css'
import React from 'react'

export default function Navbar() {
    return (
        <div className='mt-3'>
            <ul className = 'flex flex-row space-x-1 place-content-center'>
                <li className='font-bold text-white'>About Us</li>
                <li>|</li>
                <li className='font-bold text-white'>Portfolio</li>
            </ul>
        </div>
    )
}