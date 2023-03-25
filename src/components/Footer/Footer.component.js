import '../../App.css'
import React from 'react'

/**
 * TODO: get links inline
 * create snack bar for components and find SVG for icons
 * 1. GitHub
 * 2. Twitch
 * 3. LinkedIn
 * 
 */

export default function Footer(){
    return(
        <div>
            <ul className = 'flex flex-row space-x-1 place-content-center'>
                <li>Github</li>
                <li>|</li>
                <li>Twitch</li>
                <li>|</li>
                <li>LinkedIn</li>
            </ul>
        </div>
    )
}