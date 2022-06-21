import React from 'react'

export default function Hero() {
    return (
        <div className='flex justify-center py-10'>
            <div className=' grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1  mx-16 '>
                <div className=' flex justify-center text-white'>
                    <div className='' style={{ fontFamily: "Druk Wide Bold", marginTop:"10vw", }}>
                        <p style={{ fontSize: "40px" }}>YA ESTÁ AQUÍ EL <br /> NUEVO TOKEN DE <br /> <span style={{ color: "#D6302A" }} > STADIOPLUS</span></p>
                        <p style={{ fontSize: "16px", fontFamily: "Montserrat" }} >El token que revolucionará el modelo de monetización del <br /> mundo del deporte y los eSports gracias a los NFTs.</p>
                        <br />  
                        <a href="/" className='font-semibold' style={{
                            backgroundColor: '#D6302A',
                            paddingRight: '1.8vw',
                            paddingLeft: '1.8vw',
                            paddingTop: '9px',
                            paddingBottom: '9px',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: "#fff",
                            borderRadius: "3px",
                            fontFamily: "Montserrat",
                            clipPath: 'polygon(9% 0, 100% 0, 100% 60%, 91% 100%, 0 100%, 0 40%)',
                        }}>MÁS INFORMACIÓN</a>
                    </div>

                </div>
                <div className='flex justify-center text-white'>
                    <div className='ml-16 hidden sm:hidden md:hidden lg:hidden xl:flex'>
                        <img className='' style={{width:"36vw",}} src="https://i.ibb.co/t21dMpK/Sin-t-tulo-1.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
