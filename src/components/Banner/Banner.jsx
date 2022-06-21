import React from 'react'

export default function Banner() {
  return (
    <div className='flex justify-center py-6 px-16 mt-24' id='banner'>
        <div className=' relative'>
        <img src='https://i.ibb.co/c2bgFPF/Sin-t-tulo-3.png' alt='' />
        <span className='absolute' style={{
            fontFamily: "Druk Wide Bold",
            fontSize: "2.5vw",
            color: "white",
            top: "15%",
            left: "10%",
        }}>THE STADIOPLUS <br /> NFT MARKETPLACE <br /> IS COMING SOON
        <br />
        <a href="/" className='font-semibold uppercase' style={{
                            backgroundColor: '#D6302A',
                            paddingRight: '1.8vw',
                            paddingLeft: '1.8vw',
                            paddingTop: '0.8vw',
                            paddingBottom: '0.8vw',
                            alignItems: 'center',
                            fontSize: "1vw",
                            textAlign: 'center',
                            color: "#fff",
                            borderRadius: "3px",
                            fontFamily: "Montserrat",
                            clipPath: 'polygon(9% 0, 100% 0, 100% 60%, 91% 100%, 0 100%, 0 40%)',
                        }}>Join the waitlist</a>
        </span>
        
        </div>
    </div>
  )
}
