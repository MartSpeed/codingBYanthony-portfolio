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

const footerBreadcrumbsModel = [
    'Github',
    'Twitch',
    'LinkedIn'
]

const breadcrumbHandler = footerBreadcrumbsModel.map(crumbLinks => {
    return <ul><li>{crumbLinks}</li></ul>
})

const tailwindHandler = 'flex flex-row space-x-1 place-content-center font-bold text-neutral-300';

export default function Footer(){
    return(
        <div className={tailwindHandler}>
            {breadcrumbHandler}
        </div>
    )
}