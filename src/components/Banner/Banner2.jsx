import React from 'react'

export default function Banner2() {
    return (
        <div className='flex mt-24' style={{height:"22.6vw"}}>
            <div className='flex justify-center'>
                <div className='flex justify-center'>
                    <div className='' style={{height:""}}>
                        <img style={{
                            position: "relative",
                            opacity: "0.7",
                            zIndex: "-1",
                            width: "100%"
                        }} src="https://i.ibb.co/3NBhGCM/image-1012321323.png" alt="image-1012321323" border="0" />

                        <p style={{
                            position: "relative",                            
                            color: "#ffffff00",
                            WebkitTextStroke: "1px gray",
                            fontFamily: "Druk Wide Bold",
                            fontSize: "4vw",
                            zIndex: "1",
                            letterSpacing: "5px",
                            left: "5%",
                            top: "-18.6vw",
                        }}>STADIOPLUS NFT</p>
                        <p className='uppercase' style={{
                            color: "white",
                            position: "relative",
                            fontFamily: "Druk Wide Bold",
                            fontSize: "2vw",
                            zIndex: "2",
                            left: "7%",
                            top: "-21.2vw",
                        }}> <span  style={{ color: "#D6302A" }}> The StadioPlus NFT </span><br /> marketplace is coming <br /> soon</p>
                        <p  style={{
                            position: "relative",
                            zIndex: "2",
                            left: "5%",
                            top: "-19.2vw",
                        }}>
                            <a href="/" className='font-semibold' style={{
                                backgroundColor: '#D6302A',
                                paddingRight: '2vw',
                                paddingLeft: '2vw',
                                paddingTop: '9px',
                                paddingBottom: '9px',
                                alignItems: 'center',
                                textAlign: 'center',
                                fontSize: "1.3vw",
                                color: "#fff",
                                borderRadius: "3px",
                                fontFamily: "Montserrat",
                            }}>JOIN THE WAITLIST</a>
                        </p>


                    </div>
                </div>
            </div>
        </div>
    )
}
