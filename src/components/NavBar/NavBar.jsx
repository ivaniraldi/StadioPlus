import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    //function to apply dark mode and change the body background color
    const changeMode = () => {
        const body = document.querySelector('body')
        const nav = document.getElementById('navBar')
        const banner = document.getElementById('banner')
        const buttonDarkMode = document.getElementById('buttonDarkMode')
        const buttonLightMode = document.getElementById('buttonLightMode')
        nav.classList.toggle('dark')
        body.classList.toggle('dark')
        banner.classList.toggle('dark')
        buttonDarkMode.classList.toggle('dark')
        buttonLightMode.classList.toggle('dark')
    }
    //if dark mode is on hide the element 
    


    return (
        <div className=''>
            <div id="NAVBAR" className={`flex  w-full justify-center`}>

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2  font-bold justify-around items-center text-gray-500 py-8' style={{
                    width: '93%',
                }}>
                    <div>
                        <div className='inline'>
                            <div className='grid sm:flex'>
                                <div className='flex'>
                                    <img className='inline w-16' src="https://i.ibb.co/bBHfQQm/Vector.png" alt="logo" />
                                    <a className='font-semibold text-white ml-3' style={{ fontSize: "26px" }}> StadioPlus</a>

                                </div>
                                <div className=' inline ml-10 mt-4 sm:mt-0' style={{width:"370px"}}>

                                    <div className='relative' style={{marginTop: '0.5vw',}}>
                                        <input className='focus:outline-none' type="text" placeholder="BUSCA TU DROP AQUI" style={{
                                            paddingRight: '1.8vw',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.8vw',                                            
                                            background: "url(https://i.ibb.co/1nNMKQF/Vector-4.png)",
                                            backgroundSize: "cover",
                                            paddingTop: '5px',
                                            paddingBottom: '5px',
                                            alignItems: 'center',
                                            width: '374px',
                                            fontFamily: "Montserrat",
                                        }} />

                                        <img style={{
                                            position: 'absolute',
                                            right: '15px',
                                            width: '20px',
                                            top: '7px',
                                            opacity: '0.5',
                                        }} src="https://i.ibb.co/sJQrk9V/magnifying-glass.png" alt="magnifying-glass" border="0" />
                                    </div>



                                </div >
                            </div>
                        </div>
                    </div>
                    <div className=' w-full flex justify-between mt-6 md:mt-6 sm:mt-6 xl:mt-0' >

                        <div className='w-full flex justify-around mt-2'>
                            <a style={{ fontFamily: "Montserrat", }} href="/"><span className='hover:text-white'>MIS COLECCIONES</span> </a>
                            <a  style={{ fontFamily: "Montserrat", }} href="#"><span className='hover:text-white'>LOGIN</span></a>
                            <a onClick={changeMode} style={{ fontFamily: "Montserrat", }} href="#">
                                <div className='flex justify-center'>
                                    <div className='py-3'></div>
                                <img id='buttonDarkMode' className={`w-6 opacity-50 hover:opacity-100 `} style={{}} src="https://i.ibb.co/mH8tz2h/moon.png" alt="moon" border="0"/>
                                <img id="buttonLightMode" className={`w-6 opacity-50 hover:opacity-100 `} style={{}} src="https://i.ibb.co/51gHtr9/sun.png" alt="moon" border="0"/>
                                </div>
                            </a>
                        </div>
                        <a href="/" style={{
                            backgroundColor: '#D6302A',
                            paddingRight: '1.8vw',
                            paddingLeft: '1.8vw',
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: "#fff",
                            fontWeight: 'bold',
                            borderRadius: "3px",
                            fontFamily: "Montserrat",
                            clipPath: 'polygon(9% 0, 100% 0, 100% 60%, 91% 100%, 0 100%, 0 40%)',
                        }}>REGISTRARSE</a>
                    </div>
                </div>
            </div>





            <div id="navBar" className=' text-gray-500 grid grid-cols-2 py-1'>
                <div className='flex  ml-32 sm:ml-32 md:ml-16 xl:md-16 text-gray-500'
                    style={{
                        fontFamily: "Montserrat",
                        display: 'flex',
                        width: '30vw',
                        justifyContent: 'center',
                    }}>
                    <div>
                        <a className=' hover:text-white' href="/">DROPS <img className='hidden sm:hidden md:hidden lg:hidden xl:inline w-3 ' style={{ opacity: "0.6" }} src="https://i.ibb.co/kq0fFWm/arrow-down-sign-to-navigate.png" alt="arrow-down-sign-to-navigate" border="0" /></a>

                    </div>
                    <div>

                        <a className='ml-5 hover:text-white' href="/">ARTISTAS <img className='hidden sm:hidden md:hidden lg:hidden xl:inline w-3 ' style={{ opacity: "0.6" }} src="https://i.ibb.co/kq0fFWm/arrow-down-sign-to-navigate.png" alt="arrow-down-sign-to-navigate" border="0" /></a>

                    </div>
                    <div>

                        <a className='ml-5 hover:text-white' href="/">PROMOCIONES</a>
                    </div>
                </div>
                <div className=''
                    style={{
                        fontFamily: "Montserrat",
                        display: 'flex',
                        marginRight: '6vw',
                        justifyContent: 'end',
                    }}>
                    <a className='hover:text-white' href="/">ES  <img className='inline w-3' style={{ opacity: "0.6" }} src="https://i.ibb.co/kq0fFWm/arrow-down-sign-to-navigate.png" alt="arrow-down-sign-to-navigate" border="0" /></a>
                </div>
            </div>
        </div>
    )
}
