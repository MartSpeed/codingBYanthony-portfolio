import '../../App.css'
import React from 'react'
import logo from './logo.jpg';

// I need to create a flex box with 2 columns

export default function AboutMe() {
    return (
        <div className='flex flex-row mt-4'>
            <div className='h-screen w-screen h-full text-white m-75 p-8'>
                <h1 className='text-2xl font-bold text-neutral-300'>About Me</h1>
                <p className='mt-4 text-green-700 text-lg font-semibold'>
                    Hello my name is John Anthony. My current goal is to 
                    development web applications, full stack websites & game 
                    development. I plan to publish my site using github pages
                    and adding 5 100+ hour projects to this site. The first 
                    project in development is a Delta.com website clone. 
                    I love aircraft & traveling, using this passion for 
                    the project design will test my skills by creating a
                    working project environment that mimics the final product.
                    Please enjoy my creations, just as much as I had fun creating 
                    them.😊
                </p>
                <p className='mt-4 text-green-700 text-lg font-semibold'>
                    Ad culpa non amet ex anim labore. Ipsum dolor qui irure id 
                    consectetur magna sunt veniam sunt. Et pariatur enim ad 
                    exercitation cillum deserunt non exercitation do amet 
                    pariatur non dolore elit. Eiusmod velit adipisicing anim 
                    ullamco dolor esse nulla. Magna elit occaecat Lorem 
                    consectetur culpa cupidatat dolor labore aute tempor minim.
                    Anim in consectetur aute labore. Ex officia minim dolore amet 
                    voluptate sunt sit velit nulla. Aliquip ut et do sit
                    consequat veniam ea ut aute excepteur do eu mollit
                    dolore. Mollit sunt et reprehenderit labore pariatur in
                    non ullamco ipsum et pariatur. Deserunt aliquip deserunt 
                    ad ea esse deserunt tempor. Velit elit cupidatat ea et ad 
                    ex anim officia ut eiusmod irure velit consectetur. Duis 
                    fugiat pariatur elit esse Lorem exercitation minim exercitation culpa.
                </p>
            </div>
            <div className='h-screen w-screen'>
                <img 
                    className='p-4'
                    src={logo} 
                    width={600}
                    alt='placeholder text'
                />
            </div>
        </div>
    )
}