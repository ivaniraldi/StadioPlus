import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faGear,
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div className='text-white flex justify-center py-16 sm:py-20 md:py-24 lg:py-32 xl:py-32'>
            <div>

                <p className='flex justify-center'>
                    <img className='inline w-16' src="https://i.ibb.co/bBHfQQm/Vector.png" alt="logo" /><a href="/"className='font-semibold text-white text-2xl ml-3'> StadioPlus <br /></a>
                </p>
                <br />

                <p className='text-gray-500 text-s'>YA ESTÁ AQUÍ EL NUEVO TOKEN DE STADIOPLUS</p>
                <div className='flex justify-center'>

                <div className='flex w-48 text-xl justify-around mt-10'>
                    <a href="#"> 
                    <img src="https://i.ibb.co/8NWLBKh/facebook.png" alt="facebook" border="0" />
                    </a>
                    <a href="#"> 
                    <img src="https://i.ibb.co/gMPg80h/gorjeo.png" alt="gorjeo" border="0" />
                    </a>
                    <a href="#"> 
                    <img src="https://i.ibb.co/1QWHqkV/instagram.png" alt="instagram" border="0" />
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}
